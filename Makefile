BUILD_PREFIX  := dist
SRC_PREFIX    := src

VENDOR_PREFIX := bower_components
BIN_PREFIX    := node_modules/.bin

CSS_SRCS      :=                                           \
	$(VENDOR_PREFIX)/bootstrap/dist/css/bootstrap.min.css    \
	$(VENDOR_PREFIX)/animate.css/animate.min.css
JS_SRCS       :=                                           \
	$(SRC_PREFIX)/js/core.js                                 \
	$(SRC_PREFIX)/js/entrypoint.js                           \
	$(SRC_PREFIX)/js/candidate-detail.js                     \
	$(SRC_PREFIX)/js/index.js

BUILD_FILES   :=                                           \
	$(BUILD_PREFIX)/css/style.css                            \
	$(BUILD_PREFIX)/js/app.js                                \
	$(BUILD_PREFIX)/index.html                               \
	$(BUILD_PREFIX)/candidate-detail.html

site: $(BUILD_FILES)

$(BUILD_PREFIX)/css/style.css: $(CSS_SRCS)
	@parent=$$(dirname "$@"); test -e "$$parent" || mkdir -p "$$parent"
	cat $^ > $@

$(BUILD_PREFIX)/js/app.js: $(JS_SRCS)
	$(BIN_PREFIX)/eslint $^
	@parent=$$(dirname "$@"); test -e "$$parent" || mkdir -p "$$parent"
	$(BIN_PREFIX)/browserify $^ -o $@ -t babelify -t brfs

$(BUILD_PREFIX)/%.html: $(SRC_PREFIX)/html/%.html
	@parent=$$(dirname "$@"); test -e "$$parent" || mkdir -p "$$parent"
	cp $< $@

test:
	npm test

clean:
	rm -rf $(BUILD_PREFIX)

.PHONY: site test clean
