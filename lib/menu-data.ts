export type Category = 'Fire & earth' | 'The beginning' | 'After dark' | 'Sweet endings';
export type Dish = {name:string; description:string; price:number; image:string; ingredients:string[]; note?:string};
const photo=(name:string)=>'/media/dishes/'+name+'.jpg';
export const diningMenu:Record<Category,{intro:string;items:Dish[]}>= {
 'Fire & earth':{intro:'Touched by flame. Led by the season.',items:[
 {name:'Dry-aged sirloin',description:'250g · smoked marrow jus · potato pavé',price:325,image:'/media/steak.jpg',ingredients:['Dry-aged sirloin','Smoked marrow jus','Potato pavé']},
 {name:'Line-caught kingklip',description:'Brown butter · coastal greens · lemon',price:285,image:photo('fish'),ingredients:['Kingklip','Brown butter','Coastal greens','Lemon']},
 {name:'Coal-roasted cauliflower',description:'Tahini · golden raisin · almond',price:175,image:photo('cauliflower'),ingredients:['Cauliflower','Tahini','Golden raisins','Almonds']},
 {name:'Wild mushroom risotto',description:'Aged parmesan · thyme · truffle',price:215,image:photo('risotto'),ingredients:['Risotto rice','Wild mushrooms','Aged parmesan','Thyme','Truffle']}]},
 'The beginning':{intro:'Small plates. A beautiful beginning.',items:[
 {name:'Burrata',description:'Heirloom tomato · basil · sourdough',price:155,image:photo('burrata'),ingredients:['Burrata','Heirloom tomatoes','Basil','Sourdough']},
 {name:'Yellowfin tuna crudo',description:'Citrus · chilli · avocado',price:185,image:photo('tuna'),ingredients:['Yellowfin tuna','Citrus dressing','Chilli','Avocado']},
 {name:'Wood-fired prawns',description:'Chilli butter · charred lemon',price:225,image:photo('prawns'),ingredients:['Prawns','Chilli butter','Charred lemon']},
 {name:'Warm sourdough',description:'Cultured butter · smoked sea salt',price:75,image:photo('bread'),ingredients:['Sourdough','Cultured butter','Smoked sea salt']}]},
 'After dark':{intro:'A little intrigue, poured over ice.',items:[
 {name:'Smoked old fashioned',description:'Bourbon · bitters · smoked orange',price:125,image:photo('old-fashioned'),ingredients:['Bourbon','Bitters','Smoked orange','Ice'],note:'Contains alcohol'},
 {name:'Garden martini',description:'Gin · dry vermouth · botanical oil',price:115,image:photo('martini'),ingredients:['Gin','Dry vermouth','Botanical oil'],note:'Contains alcohol'},
 {name:'Blood orange margarita',description:'Tequila · fresh lime · chilli salt',price:125,image:photo('margarita'),ingredients:['Tequila','Blood orange','Fresh lime','Chilli salt'],note:'Contains alcohol'},
 {name:'Rosemary & citrus',description:'Fresh citrus · rosemary · soda · 0%',price:75,image:photo('cooler'),ingredients:['Fresh citrus','Rosemary','Soda','Ice'],note:'Alcohol-free'}]},
 'Sweet endings':{intro:'Some things are worth staying for.',items:[
 {name:'Chocolate crémeux',description:'70% cacao · olive oil · sea salt',price:125,image:photo('chocolate'),ingredients:['70% cacao chocolate crémeux','Olive oil','Sea salt']},
 {name:'Burnt Basque cheesecake',description:'Seasonal berries · vanilla cream',price:115,image:photo('cheesecake'),ingredients:['Basque cheesecake','Seasonal berries','Vanilla cream']},
 {name:'Ember-roasted pineapple',description:'Coconut sorbet · lime · rum caramel',price:95,image:photo('pineapple'),ingredients:['Roasted pineapple','Coconut sorbet','Lime','Rum caramel'],note:'Contains rum caramel'}]}
};
