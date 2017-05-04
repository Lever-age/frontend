export interface Nav {
  link?: string,
  name: string,
  exact: boolean,
  linkactive: string,
  dropdown: boolean,
  downdownUrls?: {}
  subMenuItem?: SubMenu[]
}

export interface SubMenu {
  link?: string,
  name: string,
  exact: boolean,
  linkactive: string,
  dropdown: boolean,
  dropdownlinks?: {},
  downdownUrls?: {}
}