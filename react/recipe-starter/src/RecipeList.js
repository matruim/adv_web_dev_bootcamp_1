import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipleList extends Component{
    static defaultProps = {
        recipes: [
                {
                    title: "Zucchini Spaghetti",
                    instructions: "Heat 2 tsp oil (10 mL) in large skillet over medium heat. Add eggplant and cook until softened, about 5 minutes. Remove eggplant from heat and set aside. Heat remaining oil in pan and add chicken, onion, and garlic. Cook until chicken is no longer pink and onion has softened, about 7 minutes. Add bell pepper, chipotle chili, salt, and pepper; cook for 2 minutes. Stir in pasta sauce, oregano, and eggplant, and simmer for 5 minutes. Divide zucchini strands among serving plates and top with eggplant sauce. Garnish with grated Parmesan if desired.",
                    ingredients: [
                            '4 tsp (20 mL) grapeseed oil or camelina oil',
                            '1 large eggplant, divided, then cut into 1/2 in (1.25 cm) pieces',
                            '3/4 lb (375 g) lean ground chicken',
                            '1 small yellow onion, finely diced',
                            '2 garlic cloves, minced',
                            '1 red or orange bell pepper, diced',
                            '1 chipotle chili pepper in adobo sauce, minced',
                            '1/4 tsp (1 mL) salt',
                            '1/4 tsp (1 mL) ground black pepper',
                            '1 – 26 oz (739 mL) jar no-salt-added pasta sauce',
                            '1 Tbsp (15 mL) finely chopped fresh oregano',
                            'Zucchini Noodles (fresh or frozen)',
                            '* Parmesan, for garnish'
                        ],
                    img: "https://www.freshthyme.com/wp-content/uploads/2016/10/zucchini-spaghetti-1024x509.jpg"
                },
                {
                    title: "Milkshake",
                    instructions: "Combine ice cream and milk.  Blend until creamy",
                    ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                    img: "https://images-gmi-pmc.edge-generalmills.com/0566019d-986b-4d87-9b6b-de1e4d33fa97.jpg"
                },
                {
                    title: "Avocado Toast",
                    instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
                    ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/11/0/FNK_All-the-Avocado-Toast_s4x3.jpg.rend.hgtvcom.616.462.suffix/1450059496131.jpeg"
                }
            ]
    };
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    
    
    render(){
        const recipes = this.props.recipes.map((r,index) => (
                <Recipe key={index} {...r} />
            ))
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipleList;