export interface ITauriConf {
  package: {
    productName: string
    version: string
  }
  tauri: {
    bundle: {
      icon: string[]
      targets: string
      identifier: string
      shortDescription: string
      longDescription: string
    }
  }
}
