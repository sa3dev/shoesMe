import { describe, it, expect , test } from 'vitest'
import  Item  from '../Item.vue'

import { mount } from '@vue/test-utils'


const items = {
        name: 'Shoes 1',
        imgUrl: 'https://api.lorem.space/image/shoes?w=100&h=100',
        price: 12.5,
        numberOfItem: 0
}

describe('Item', () => {
    it('Products items exist' , () => {
        expect(items).toBeDefined(); 
    })
    test('Products items price exist ' , () => {
        expect(items.price).toBeGreaterThan(0)  
    })
    test('Products items price exist ' , () => {
        expect(items.numberOfItem).toBeGreaterThanOrEqual(0)  
    })
    
})



