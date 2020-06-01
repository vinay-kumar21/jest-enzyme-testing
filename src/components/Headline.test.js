import React from 'react';
import {shallow} from 'enzyme';
 import Headline from './Headline';


 const setUp =(props={})=>{
    const component=shallow(<Headline  {...props}/>)
    return component;
      }
 const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
  };

 

  describe('Headline Component',()=>{
      describe('Have Props',()=>{
         let component;
         beforeEach(()=>{
             const props={
                 header:'test Header',
                 desc:'test desc'
             };
             component = setUp(props);
         })

         it('Should render with out error',()=>{
            const wrapper = findByTestAtrr(component, "headlineComponent");
            expect(wrapper.length).toBe(1);

         });

         it('Should render a H1', () => {
            const h1 = findByTestAtrr(component, 'header');
            expect(h1.length).toBe(1);
        });

        it('Shoud render a desc',()=>{
            const desc=findByTestAtrr(component,'desc');
            expect(desc.length).toBe(1);
        })
      });
      describe('Have No Props',()=>{
         let wrapper;
         beforeEach(()=>{
             wrapper=setUp();
         })
         it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        });
    });
  })