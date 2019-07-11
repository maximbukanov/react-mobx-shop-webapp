import { observable, computed, action } from 'mobx';

class Cart {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable products = [];

    @computed get productsDetailed() {
        return this.products.map((pr) => {
            let product = this.rootStore.shopModel.getById(pr.id);
            return { ...product, cnt: pr.cnt };
        });
    }

    @computed get inCart() {
        return (id) => this.products.some((product) => product.id === id);
    }

    @computed get total() {
        return this.productsDetailed.reduce((t, pr) => {
            return t + pr.price * pr.cnt;
        }, 0);
    }

    @computed get getItemsCnt() {
        return this.products.length;
    }

    @action add(id) {
        this.products.push({ id, cnt: 1 });
    }

    @action change(id, cnt) {
        let index = this.products.findIndex((pr) => pr.id === id);

        if (index !== -1) {
            this.products[index].cnt = cnt;
        }
    }

    @action remove(id) {
        let index = this.products.findIndex((pr) => pr.id === id);

        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }

    @action clear() {
        this.productsDetailed.map((item, i) => {
            this.remove(item.id);
        });
    }
}

export default Cart;