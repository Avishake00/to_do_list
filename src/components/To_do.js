import React, { useState } from "react";
import todoimg from "./todoimg.png";
import "../App.css";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function ToDo() {
	const [inputData, setInputData] = useState("");
	const [item, setItem] = useState([]);

	const addItem = () => {
		if (!inputData) {
			// You can add a notification or alert here for empty input
		} else {
			setItem([...item, inputData]);
			setInputData("");
		}
	};

	const deleteItem = (id) => {
		const updatedData = item.filter((elem, key) => {
			return key !== id;
		});

		setItem(updatedData);
	};

	const removeAll = () => {
		setItem([]);
	};

	return (
		<>
			<div className="main-div">
				<div className="child-div">
					<figure>
						<img src={todoimg} alt="Todo_list" />
						<figcaption>My To-Do List 🫠</figcaption>
					</figure>

					<div className="add-item">
						<input
							type="text"
							placeholder="Add Item ✍️..."
							value={inputData}
							onChange={(e) => setInputData(e.target.value)}
							onKeyUp={(e) => {
								if (e.key === "Enter") {
									addItem();
								}
							}}
						/>
						<button className="add-btn" title="Add Item" onClick={addItem}>
							➕
						</button>
					</div>

					<div className="show-item">
						{item.map((elem, id) => (
							<div className="each-item" key={id}>
								<h3>{elem}</h3>
								<button
									title="Delete Button"
									onClick={() => deleteItem(id)}
									className="delete-btn"
								>
									🗑️
								</button>
							</div>
						))}
					</div>

					<div className="remove-all">
						<button
							title="Remove All Items"
							onClick={removeAll}
							className="remove-all-btn"
						>
							Remove All
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
