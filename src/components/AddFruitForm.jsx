import React, {useState} from "react";

const AddFruitForm = ({ addFruit }) => {
    const [fruitName, setFruitName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (fruitName) {
            addFruit(fruitName);
            setFruitName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={fruitName}
                onChange={(e) => setFruitName(event.target.value)}
                placeholder="Enter a fruit name"
            />
            <button type="submit">Add Fruit</button>
        </form>
    );
};

export default AddFruitForm;