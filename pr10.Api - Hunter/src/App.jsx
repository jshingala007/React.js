import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () =>  {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = () => {
        fetch(`https://dummyjson.com/recipes`)
            .then(response => response.json())
            .then(AllRecipes => {
                setRecipes(AllRecipes.recipes); 
            });
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div className="data-container py-5 bg-light">
            <h1 className="text-center mb-4" style={{ fontSize: '36px', color: '#333' }}>
                :Recipes API Using Fetch Method:
            </h1>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-hover table-striped table-bordered text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Recipe Name</th>
                                    <th scope="col">Cuisine</th>
                                    <th scope="col">Ingredients</th>
                                </tr>
                            </thead>

                            <tbody>
                                {recipes && recipes.map((recipe, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            <img
                                                src={recipe.image || 'https://via.placeholder.com/50'}
                                                alt={recipe.name}
                                                className="rounded"
                                                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                            />
                                        </td>
                                        <td>{recipe.name}</td>
                                        <td>{recipe.cuisine}</td>
                                        <td>{recipe.ingredients.join(', ')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
