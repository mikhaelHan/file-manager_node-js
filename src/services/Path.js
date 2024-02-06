class Path {
  static _path;

  static getPath() {
    return this._path;
  }

  static setPath(path) {
    this._path = path;
  }
}

export default Path;