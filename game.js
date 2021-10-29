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
const player = new BasePlayer('Steve', 100, 5)
player.getDamage(10)
console.log(player.hp)