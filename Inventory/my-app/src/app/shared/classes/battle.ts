import {User} from "./user";
import {Hero} from "./hero";
export class Battle {
    private user1_heroList: Hero[] = [];
    private user2_heroList: Hero[] = [];
    private heroList: Hero[] = [];
    private hasWinner = false;
    private battleInterval;

    constructor(private user1: User, private user2: User, private battleArray) {
        this.setEnemies(user1, user2);
        this.setEnemies(user2, user1);

        this.setHeroList(user1, this.user1_heroList);
        this.setHeroList(user2, this.user2_heroList);

        this.pushHeroList(user1);
        this.pushHeroList(user2);

        this.setReady();
    }

    pushHeroList(user) {
        this.heroList.push(user.getHunter());
        this.heroList.push(user.getWarrior());
        this.heroList.push(user.getMage());
    }

    setHeroList(user, list) {
        list.push(user.getHunter());
        list.push(user.getWarrior());
        list.push(user.getMage());
    }

    setEnemies(user1, user2) {
        user1.getHunter().setEnemy(user2.getHunter());
        user1.getWarrior().setEnemy(user2.getWarrior());
        user1.getMage().setEnemy(user2.getMage());
    }

    startBattle() {
        this.hitAll();

        this.battleInterval = setInterval(() => {
        }, 2000);
    }

    setReady() {
        for (let hero of this.user1_heroList) {
            if (Math.random() < 0.5) {
                hero.setReady(true);
            } else {
                hero.getEnemy().setReady(true);
            }
        }
    }

    hitAll() {
        this.battleArray.splice(0);
        for (let hero of this.heroList) {
            
            if (hero.getLifeStatus()) {
                if (hero.isReady()) {
                    hero.hitEnemy();

                    /*this.battleObject.hit = this.heroList.indexOf(hero);
                     this.battleObject.def = this.heroList.indexOf(hero.getEnemy());*/
                    /*Array Push*/
                    const obj = {
                        hit: this.heroList.indexOf(hero),
                        def: this.heroList.indexOf(hero.getEnemy())
                    };
                    this.battleArray.push(obj);

                    if (hero.getHasEnemy() == false) {
                        hero.setEnemy(this.findEnemy(hero));
                    }
                }
                hero.toggleReady();
            }
        }
        console.log(this.battleArray);

        this.checkWin();
    }


    findEnemy(hero): Hero {
        const list = this.getList(hero.getEnemy());

        let resHero;
        for (let hero of list) {
            if ((!resHero || hero.getHealth() < resHero.getHealth()) && hero.getLifeStatus()) {
                resHero = hero;
            }
        }

        return resHero;
    }

    getList(hero): Hero[] {
        if (this.user1_heroList.indexOf(hero) != -1) {
            return this.user1_heroList;
        }
        if (this.user2_heroList.indexOf(hero) != -1) {
            return this.user2_heroList;
        }
    }

    checkWin() {
        let user1Lose = true;
        for (let item of this.user1_heroList) {
            if (item.getLifeStatus() == true) {
                user1Lose = false;
            }
        }

        let user2Lose = true;
        for (let item of this.user2_heroList) {
            if (item.getLifeStatus() == true) {
                user2Lose = false;
            }
        }

        if (user1Lose == true) {
            this.win(this.user2);
        } else if (user2Lose == true) {
            this.win(this.user1);
        }
    }

    win(user) {
        console.log(user);
        clearInterval(this.battleInterval);
    }
}