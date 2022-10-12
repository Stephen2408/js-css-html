let test = {
    name: 'OG Kush',
    effect: 'Red eyes',
    favpercent: 100,
    checkFavorite : function (){
        return this.name + this.effect + this.favpercent;
    }
};

let elType = document.getElementById('goods');
elType.textContent = test.name;

let elEffect = document.getElementById('kind');
elEffect.textContent = test.checkFavorite();