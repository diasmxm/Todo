class BasePlayer{
    constructor(name, hp, damage){
        this.name = name; 
        this.hp = hp;
        this.damage = damage;
    }
    sayName(){
        return this.name
    }
    attack(target){
        target.hp = target.hp - this.damage;
    }
    getDamage(damage){
        this.hp = this.hp - damage
    }
}

class Tank extends BasePlayer{
    getShield(){
        return 'я не могу быть атакован'
    }
}
let tank = new Tank('tank', 100, 20)
console.log(tank.sayName())
console.log(tank.getShield())

// const player = new BasePlayer('Steve', 100, 5)
// player.getDamage(10)
// console.log(player.hp)


// let obj = {
//     name: 'Ivan',
//     surname: 'Ivanov',
//     sayName: function(){
//         return `меня зовут &{this.name} &{this.surname}`
//     }
// }
// let name = 'Semen'
// let surname = 'Semenovich'
// console.log(obj.sayName());