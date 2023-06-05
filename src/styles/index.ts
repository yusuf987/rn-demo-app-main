import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    flex: {
      flex: 1,
    },
    image: {
      marginTop: 8,
      marginRight: 16,
    },
    discounted: {
      textDecorationLine: 'line-through',
    },
    salePrice:{
      color: '#DA2121',
    },
    itemHeader:{
      fontWeight:"bold",
      color:"black"
    },
    itemPrice:{
      color:"black",
    },
    itemBrand:{
      color:"#545454",
      fontSize:14
    },
  
    fontLarg:{
      fontSize:18
    },     
    
    ListItemContainer:{
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 25,
    borderBottomColor: 'rgba(0,0, 0, 0.05)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    backgroundColor:"#f9f9f9"
  
    }
  });