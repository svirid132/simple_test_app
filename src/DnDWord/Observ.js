import {DnDType} from './DnDType'

export class Observ {
    constructor(data, name) {
        this.dropData = data.map((line) => (
                            line.words.map((word, index) => ({index: -index - 1, word: ''}))));
                            // .reduce((accamulator, line) => accamulator.concat(line), []);
        

        let index = 0;
        this.dragData = data.map((line) => (
            line.words.map((word) => ({index: index++, word: word})))
        ).reduce((accamulator, line) => accamulator.concat(line), []);

        this.dragData.sort((item_1, item_2) => {
            if(item_1.word[0] < item_2.word[0]) {
                console.log('1');
                return 1;
            } else if(item_1.word[0] > item_2.word[0]) {
                console.log('-1');
                return -1;
            } else {
                return 0;
            }
        });

        console.log(this.dragData);

        this.observ = {};
        this.observ[DnDType.drop] = {};    

        this.originDragData = Object.assign([], this.dragData);
        this.originDropData = Object.assign([], this.dropData);

        this.data = data;

        this.name = name;
    }

    setObserv(observ, type, lineIndex = null) {
        if (lineIndex === null) {
            this.observ[type] = observ;
        } else {
            this.observ[type][lineIndex] = observ;
        }
    }

    canDrop(dragIndex, dropIndex, dragPlace, dropPlace, dragLineIndex, dropLineIndex) {
        return !(dragIndex === dropIndex && 
            dragPlace === dropPlace &&
            dragLineIndex === dropLineIndex);
    }
    
    move(dragIndex, dropIndex, dragPlace, dropPlace, dragLineIndex, dropLineIndex) {

        let update;

        if (dragPlace === dropPlace) {
            if (dragPlace === DnDType.drop) {
                const dragObj = Object.assign({} ,this.dropData[dragLineIndex].find((item) => {
                    return item.index === dragIndex;
                }));
                const dropObj = Object.assign({} ,this.dropData[dropLineIndex].find((item) =>{
                    return item.index === dropIndex;
                }));
                this.dropData[dragLineIndex] = this.dropData[dragLineIndex].map((item, index) => {
                    if (item.index === dragIndex){
                         return {index: -index - 1, word: ''};
                    }
                    return item;
                });
                this.dropData[dropLineIndex] = this.dropData[dropLineIndex].map((item) => {
                    if (item.index === dropIndex) {
                        return dragObj;
                    }
                    return item;
                });
                if (dropObj.word !== ''){
                    this.dragData.unshift(dropObj);
                    this.singleUpdate( this.dragData, this.observ[DnDType.drag]);
                }
                this.update( this.dropData[dragLineIndex], this.observ[DnDType.drop][dragLineIndex],  this.dropData[dropLineIndex], this.observ[DnDType.drop][dropLineIndex]);
            } else {
                const dragObj = Object.assign({} ,this.dragData.find((item) => item.index === dragIndex));
                const dropObj = Object.assign({} ,this.dragData.find((item) => item.index === dropIndex));
                this.dragData = this.dragData.map((item) => {
                    if (item.index === dropIndex) return dragObj;
                    if (item.index === dragIndex) return dropObj;
                    return item;
                });
                this.singleUpdate(this.dragData, this.observ[DnDType.drag]);
            }
        } else {
            if (dropPlace === DnDType.drop) {
                if (this.dropData[dropLineIndex].find((item) => item.index === dropIndex).word !== '') {
                    const dropItem = Object.assign({}, this.dropData[dropLineIndex].find((obj) => obj.index === dropIndex));
                    this.dragData.unshift(dropItem);
                };
                const dragItem = this.dragData.find((obj) => obj.index === dragIndex);
                this.dropData[dropLineIndex] = this.dropData[dropLineIndex].map(item => {
                    if (dropIndex === item.index) {
                        return Object.assign([], dragItem);
                    }
                    return item;
                });
                update = (dragData, dragObserv) => (
                    this.update(dragData, dragObserv, this.dropData[dropLineIndex], this.observ[DnDType.drop][dropLineIndex])
                );
            } else {
                this.dragData.splice(this.dragData.findIndex((item) => item.index === dropIndex), 0, this.dropData[dragLineIndex].find((item) => item.index === dragIndex)); 
                update = (dragData, dragObserv) => (
                    this.update(dragData, dragObserv, this.dragData, this.observ[DnDType.drag])
                );
            }

            if (dragPlace === DnDType.drag) {
                this.dragData = this.dragData.filter((obj) => obj.index !== dragIndex);
                update(this.dragData, this.observ[DnDType.drag]); 
            } else {
                this.dropData[dragLineIndex] = this.dropData[dragLineIndex].map((item, index) => {
                    if (item.index === dragIndex) {
                        return {index: -index - 1, word: ''};
                    }
                    return item;
                });
                update(this.dropData[dragLineIndex], this.observ[DnDType.drop][dragLineIndex]);
            }
        }
    }

    singleUpdate(data, observ){
        observ(Object.assign([], data));
    }
    
    update(dragData, dragObserv, dropData, dropObserv) {
        dragObserv(Object.assign([], dragData));
        dropObserv(Object.assign([], dropData));
    }

    getStars() {
        let stars = 0;
        let index = 0;
        this.dropData.forEach((line) => {
            for (let i = 0; i < line.length; ++i) {
                if (line[i].index === index) ++stars;
                ++index;
            }
        });
        return stars;
    }

    solution() {
        let index = 0;
        this.dropData = this.data.map((line) => (line.words.map((word) => ({index: index++, word}))));
        for (let i = 0; i < this.dropData.length; ++i) {
            this.singleUpdate(this.dropData[i], this.observ[DnDType.drop][i]);
        }
        this.dragData = [];
        this.singleUpdate(this.dragData, this.observ[DnDType.drag]);
    }

    reset() {
        this.dropData = this.data.map((line) => (
            line.words.map((word, index) => ({index: -index - 1, word: ''}))));
            // .reduce((accamulator, line) => accamulator.concat(line), []);


        let index = 0;
        this.dragData = this.data.map((line) => (
        line.words.map((word) => ({index: index++, word: word})))
        ).reduce((accamulator, line) => accamulator.concat(line), []).sort((item_1, item_2) => item_1.word[0] > item_2.word[0]);

        this.dragData.sort((item_1, item_2) => {
            if(item_1.word[0] < item_2.word[0]) {
                console.log('1');
                return 1;
            } else if(item_1.word[0] > item_2.word[0]) {
                console.log('-1');
                return -1;
            } else {
                return 0;
            }
        });

        for (let i = 0; i < this.dropData.length; ++i) {
            this.singleUpdate(this.dropData[i], this.observ[DnDType.drop][i]);
        }
        this.singleUpdate(this.dragData, this.observ[DnDType.drag]);
    }

    check(lineIndex, wordIndex, checkIndex){
        let beginIndex = 0;
        for (let i = 0; i < lineIndex; ++i) {
            beginIndex += this.data[i].words.length;
        }
        const rigthIndex = beginIndex + wordIndex;
        return checkIndex === rigthIndex;
    }
}