export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(obj) {
      this.members.add(obj.name);
    }
  
    addAll(...arr) {
      arr.forEach( (obj) => {
        this.members.add(obj.name)
      });
    }
  
    toArray() {
      return Array.from(this.members);
    }
  }
  
export class Character {
    constructor(name) {
      this.name = name;
    }
  }
