import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form action="" className="store-selector">
                    <h2>Please Enter A Store</h2>
                    <input type="text" required placeholder="store Name" />
                    <button type = "submit">Visit Store</button>
                </form>
            </React.Fragment>

        )
    }
}
export default StorePicker;
