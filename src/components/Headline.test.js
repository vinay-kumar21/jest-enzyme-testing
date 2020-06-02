import React from 'react';
import {shallow} from 'enzyme';
 import Headline from './Headline';
 import checkPropsTypes from 'check-prop-types';


 const setUp =(props={})=>{
    const component=shallow(<Headline  {...props}/>)
    return component;
      }
 const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
  };

  const checkProps=(component,expectedProps)=>{
      const propsErr=checkPropsTypes(component.propTypes,expectedProps,'props',component.name);
      return propsErr;
  }
 

  describe('Headline Component',()=>{
     
    describe('Should Not through a warning',()=>{
        const expectedProps={
            header:'Test Header',
            desc:'Test Desc',
            tempArr:[{
                fName:'Test fName',
                lName:'Test lName',
                age:29,
                email:'test@mail.com',
                onlineStatus:false
            }]
        }

        const propsErr=checkProps(Headline,expectedProps);
        expect(propsErr).toBeUndefined();
    })

    
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