// Polyfill for File API in Node.js environment
if (typeof globalThis.File === 'undefined') {
  // Simple File polyfill for Node.js
  globalThis.File = class File {
    constructor(fileBits, fileName, options = {}) {
      this.name = fileName;
      this.type = options.type || '';
      this.lastModified = options.lastModified || Date.now();
      this.size = 0;
      
      if (fileBits) {
        this.size = fileBits.reduce((acc, bit) => {
          if (typeof bit === 'string') {
            return acc + bit.length;
          } else if (bit instanceof ArrayBuffer) {
            return acc + bit.byteLength;
          }
          return acc;
        }, 0);
      }
    }
    
    stream() {
      // Return a simple readable stream-like object
      return {
        getReader() {
          return {
            read() {
              return Promise.resolve({ done: true, value: undefined });
            }
          };
        }
      };
    }
    
    text() {
      return Promise.resolve('');
    }
    
    arrayBuffer() {
      return Promise.resolve(new ArrayBuffer(0));
    }
  };
}

// Also add Blob if needed
if (typeof globalThis.Blob === 'undefined') {
  globalThis.Blob = class Blob {
    constructor(blobParts = [], options = {}) {
      this.type = options.type || '';
      this.size = 0;
    }
    
    stream() {
      return {
        getReader() {
          return {
            read() {
              return Promise.resolve({ done: true, value: undefined });
            }
          };
        }
      };
    }
    
    text() {
      return Promise.resolve('');
    }
    
    arrayBuffer() {
      return Promise.resolve(new ArrayBuffer(0));
    }
  };
}