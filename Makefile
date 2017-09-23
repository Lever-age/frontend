BUILD_PREFIX := dist

VENDOR_PREFIX := bower_components
BIN_PREFIX    := node_modules/.bin

CSS_SRCS :=                                                \
	$(VENDOR_PREFIX)/bootstrap/dist/css/bootstrap.min.css    \
	$(VENDOR_PREFIX)/animate.css/animate.min.css

site: $(BUILD_PREFIX)/css/style.css

$(BUILD_PREFIX)/css/style.css: $(CSS_SRCS)
	@parent=$$(dirname "$@"); test -e "$$parent" || mkdir -p "$$parent"
	cat $^ > $@


clean:
	rm -rf $(BUILD_PREFIX)

.PHONY: site
