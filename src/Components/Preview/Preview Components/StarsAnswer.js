import React, {useState, useEffect} from 'react';

import {StarsAnswersTypes} from '../Preview Helper/AnswersType';
// const {height, width} = Dimensions.get('window');

const StarsAnswers = ({onPress, value,minimize}) => {
  const [defaultRating, setDefaultRating] = useState(value);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);


  return (
    <div>
      {StarsAnswersTypes.map((item, index) => {
        return (
          <div className={minimize ? "star1-tab" : "star1"  }   
            key={item.id}
            onClick={() => {
              setDefaultRating(item.id);
              onPress(item);
            }}>
            <img className={minimize ? "heart-image stars-image-tab" : "heart-image stars-image"}
              resizeMode="contain"
              
              src={item.id <= defaultRating ? item.selected : item.un}
            />
           
            {index === 0 ? (
              <p className={minimize ? "worst-tab" : "worst"} style={{
                color: 'black',
                fontFamily: 'Poppins-Bold',
                
              }}>Worst Rating</p>
            ) : null}
            {index === StarsAnswersTypes.length - 1 ? (
              <p className={minimize ? "best best-stars-tab" : "best best-stars"} style={{
                color: 'black',
                fontFamily: 'Poppins-Bold',
                
              }}>Best Rating</p>
            ) : null}
          </div>
        );
      })}
      {/* <Text style={{fontSize: 50, fontWeight: 'bold'}}>{1 + 1}</Text> */}
    </div>
  );
};

export default StarsAnswers;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     justifyContent: 'center',
//     textAlign: 'center',
//   },
//   titleText: {
//     padding: 8,
//     fontSize: 16,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontSize: 23,
//     color: '#000',
//     marginTop: 15,
//   },
//   textStyleSmall: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#000',
//     marginTop: 15,
//   },
//   buttonStyle: {
//     justifyContent: 'center',
//     flexDirection: 'row',
//     marginTop: 30,
//     padding: 15,
//     backgroundColor: '#8ad24e',
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//   },
 
  
// });
