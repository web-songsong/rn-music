import React, {useState} from 'react';
import {Image} from 'react-native-elements';
import Swiper from 'react-native-swiper';

import {View, TouchableOpacity} from 'react-native';

export interface ImgItemType {
  id: number;
  uri: string;
}
interface CarouselProps {
  dataList: Array<ImgItemType>;
  onPress: Function;
}
/**/
export default ({dataList, onPress}: CarouselProps) => {
  return (
    <View style={{height: 230}}>
      <Swiper autoplay={true}>
        {dataList.map(item => (
          <TouchableOpacity
            onPress={() => onPress(item)}
            key={item.id}
            style={{
              margin: 20,
              flex: 1,
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <Image source={{uri: item.uri}} style={{flex: 1, height: 200}} />
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};
