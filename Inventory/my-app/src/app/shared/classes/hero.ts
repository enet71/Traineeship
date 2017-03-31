export class Hero {
    private enemy;
    private health;

    private range: boolean = false;
    private lifeStatus: boolean = true;
    private hasEnemy: boolean = false;
    private ready: boolean = false;

    constructor(private strength,
                private agility,
                private intelligence,
                private maxHealth,
                private damage,) {
        this.health = maxHealth;
    }

    setHealth(health) {
        this.health = health;
        this.checkLifeStatus();
    }

    plusHealth(value) {
        this.health += value;
        this.checkLifeStatus();
    }

    checkLifeStatus() {
        if (this.health <= 0) {
            this.lifeStatus = false;
            this.health = 0;
        }
    }

    getLifeStatus() {
        return this.lifeStatus;
    }

    getHealth() {
        return this.health;
    }

    getMaxHealth() {
        return this.maxHealth;
    }

    getStrength() {
        return this.strength;
    }

    getAgility() {
        return this.agility;
    }

    getIntelligence() {
        return this.intelligence;
    }

    getDamage() {
        return this.damage;
    }

    isReady() {
        return this.ready;
    }

    setReady(status: boolean) {
        this.ready = status;
    }

    toggleReady() {
        this.ready = !this.ready;
    }

    getEnemy(): Hero {
        return this.enemy;
    }

    getHasEnemy(): boolean {
        return this.hasEnemy;
    }

    setEnemy(enemy: Hero) {
        this.enemy = enemy;
        this.hasEnemy = true;
    }

    hitEnemy() {
        this.enemy.plusHealth(-this.damage);
        if (!this.enemy.getLifeStatus()) {
            this.hasEnemy = false;
        }
    }

}