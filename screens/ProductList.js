import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import MyHeader from "../components/MyHeader"


export default class Cart extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectAll: false,
			cartItemsIsLoading: false,
			cartItems: [
				/* Sample data from walmart */
				{itemId: "501436323", name: "Power Wheels Dune Racer Extreme", thumbnailImage: "https://i5.walmartimages.com/asr/805e2c98-f337-4d12-be40-8e91bee9c1f6.f0b8e0e43dbea3172403f18871b0604d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", color: "Red", qty: 1, salePrice: "105", checked: 1},
				{itemId: "35031861", name: "Razer Nommo", thumbnailImage: "https://i5.walmartimages.com/asr/920d5375-6216-47fb-9595-c43ed0be86ca.b7085822979a25fbc7e5e48bcd245e98.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", qty: 1, color: "Green", salePrice: "199", checked: 0},
				{itemId: "801099131", name: "Logitech Z130 Compact 2.0 Stereo Speakers, 3.5mm Jack, Black",thumbnailImage:"https://i5.walmartimages.com/asr/91d25458-7ca4-480d-9406-a4230a1bc9f0_1.3dd5c2dc6742f0848092fb0a38db6664.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" ,qty: 1, color: "Blue", salePrice: "27.99", checked: 1},
				{itemId: "42608079", name: "Little Tikes Cape Cottage Playhouse, Tan", thumbnailImage: "https://i5.walmartimages.com/asr/00ee75a5-689e-4c85-abd4-dfbf1c2ae7fc_1.2e5f2bf895224980fe72621c4ec9f87b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", color: "Purple", qty: 1, salePrice: "129.99", checked: 0},
				{itemId: "247714372", name: "Cyber Acoustics 2-Piece USB Powered Computer Speaker System", thumbnailImage: "https://i5.walmartimages.com/asr/caa491ae-6f8c-437a-9b58-78aa509216d1_1.f36ebdf65c6f4e2e8c3a48ac8a3de0c7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", qty: 1, color: "Black", salePrice: "269", checked: 1}
			]
		}
	}
	
	selectHandler = (index, value) => {
		const newItems = [...this.state.cartItems]; // clone the array 
		newItems[index]['checked'] = value == 1 ? 0 : 1; // set the new value 
		this.setState({ cartItems: newItems }); // set new state
	}
	
	selectHandlerAll = (value) => {
		const newItems = [...this.state.cartItems]; // clone the array 
		newItems.map((item, index) => {
			newItems[index]['checked'] = value == true ? 0 : 1; // set the new value 
		});
		this.setState({ cartItems: newItems, selectAll: (value == true ? false : true) }); // set new state
	}
	
	deleteHandler = (index) => {
		alert(
			'Are you sure you want to delete this item from your cart?',
			'',
			[
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'Delete', onPress: () => {
					let updatedCart = this.state.cartItems; /* Clone it first */
					updatedCart.splice(index, 1); /* Remove item from the cloned cart state */
					this.setState(updatedCart); /* Update the state */
				}},
			],
			{ cancelable: false }
		);
	}
	
	quantityHandler = (action, index) => {
		const newItems = [...this.state.cartItems]; // clone the array 
		
		let currentQty = newItems[index]['qty'];
		
		if(action == 'more'){
			newItems[index]['qty'] = currentQty + 1;
		} else if(action == 'less'){
			newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
		}
		
		this.setState({ cartItems: newItems }); // set new state
	}
	
	subtotalPrice = () => {
		const { cartItems } = this.state;
		if(cartItems){
			return cartItems.reduce((sum, item) => sum + (item.checked == 1 ? item.qty * item.salePrice : 0), 0 );
		}
		return 0;
	}
	
  
	
	
	render() {
		const styles = StyleSheet.create({
			centerElement: {justifyContent: 'center', alignSelf: 'center'},
		});
		
		const { cartItems, cartItemsIsLoading, selectAll } = this.state;
		// Heading
		return (
      
			<View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
    
      <MyHeader title="Add to Cart" navigation={this.props.navigation}/>
          
				
				
				
				
				{cartItemsIsLoading ? (
					<View style={[styles.centerElement, {height: 300}]}>
						<ActivityIndicator size="large" color="#ef5739" />
					</View>
				) : (
					<ScrollView>	
						{cartItems && cartItems.map((item, i) => (
							<View key={i} style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 120}}>
								<View style={[styles.centerElement, {width: 60}]}>
									<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.selectHandler(i, item.checked)}>
										<Ionicons name={item.checked == 1 ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={item.checked == 1 ? "#0faf9a" : "#aaaaaa"} />
									</TouchableOpacity>
								</View>
								<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
									<TouchableOpacity onPress={() => {/*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/}} style={{paddingRight: 10}}>
										<Image source={{uri: item.thumbnailImage}} style={[styles.centerElement, {height: 60, width: 60, backgroundColor: '#eeeeee'}]} />
									</TouchableOpacity>
									<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
										<Text numberOfLines={1} style={{fontSize: 15}}>{item.name}</Text>
										<Text numberOfLines={1} style={{color: '#8f8f8f'}}>{item.color ? 'Variation: ' + item.color : ''}</Text>
                    <Text numberOfLines={1} style={{color: '#333333', marginBottom: 10}}>${item.qty * item.salePrice}</Text>
										<View style={{flexDirection: 'row'}}>
											<TouchableOpacity onPress={() => this.quantityHandler('less', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
												<MaterialIcons name="remove" size={22} color="#cccccc" />
											</TouchableOpacity>
											<Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#bbbbbb', fontSize: 13 }}>{item.qty}</Text>
											<TouchableOpacity onPress={() => this.quantityHandler('more', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
												<MaterialIcons name="add" size={22} color="#cccccc" />
											</TouchableOpacity>
										</View>
									</View>
									
								</View>
								<View style={[styles.centerElement, {width: 60}]}>
									<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.deleteHandler(i)}>
										<Ionicons name="md-trash" size={25} color="#ee4d2d" />
									</TouchableOpacity>
								</View>
							</View>
						))}
					</ScrollView>
				)}
				
				{!cartItemsIsLoading &&
					<View style={{backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 5}}>
						<View style={{flexDirection: 'row'}}>
							<View style={[styles.centerElement, {width: 60}]}>
								<View style={[styles.centerElement, {width: 32, height: 32}]}>
								
								</View>
							</View>
							
						</View>
						<View style={{flexDirection: 'row'}}>
							<View style={[styles.centerElement, {width: 60}]}>
								<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.selectHandlerAll(selectAll)}>
									<Ionicons name={selectAll == true ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={selectAll == true ? "#0faf9a" : "#aaaaaa"} />
								</TouchableOpacity>
							</View>
							<View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
								<Text>Select All</Text>
								<View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
									<Text style={{color: '#8f8f8f'}}>SubTotal: </Text>
									<Text>${this.subtotalPrice().toFixed(2)}</Text>
								</View>
							</View>
						</View>
						<View style={{flexDirection: 'row', justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'center'}}>
							<TouchableOpacity style={[styles.centerElement, {backgroundColor: '#0faf9a', width: 100, height: 25, borderRadius: 5}]} onPress={() => this.props.navigation.navigate("Payment")}>
								<Text style={{color: '#ffffff'}}>Checkout</Text>
							</TouchableOpacity>
						</View>
					</View>
				}
			</View>
		);
	}
}