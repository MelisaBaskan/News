import React from 'react';
import { Text, View, FlatList, StyleSheet , ScrollView, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewsCard from './src/components/NewsCard';
import news_data from "./src/news_data.json"
import news_banner_data from "./src/news_banner_data.json"
import { Dimensions } from 'react-native';

 function App() {

   const renderNews = ({item}) => <NewsCard news={item} />

  return (
   <SafeAreaView style={styles.container}>
     <Text style={styles.headerText}>News</Text>
       <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              news_banner_data.map(bannerNews => (
               <Image 
                 style={styles.banner_image} 
                 source={{url: bannerNews.imageUrl}}
                 />
               ))}
          </ScrollView >           
          )}
          keyExtractor={item => item.u_id.toString()}
          data={news_data}
          renderItem={renderNews} 
     />   
  
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },
  banner_image:{
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width /2,
  },
  headerText:{
    fontWeight:'bold',
    fontSize: 50,
  }
})


export default App;