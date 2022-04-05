export class StringBuilder {
  static Builder() {
    class Builder {
      bucket: string[];
      constructor() {
        this.bucket = [];
      }

      append(str: string) {
        if (str !== null) {
          this.bucket.push(str);
        }
        return this;
      }

      build() {
        return this.bucket.join(' ');
      }
    }

    return new Builder();
  }
}