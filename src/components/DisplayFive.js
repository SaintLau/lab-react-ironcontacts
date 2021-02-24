import React from 'react';
import contacts from '../contacts.json'; 

class DisplayFive extends React.Component {
    state = {  
        displayFive: contacts.slice(0, 5) 
    }

    addContactHandler = () => {
        const contactRandom = contacts[Math.floor(Math.random() * contacts.length)];
        this.setState({
            displayFive: [...this.state.displayFive, contactRandom],
        })
    }

    sortName = () => {
        this.setState({
            displayFive: this.state.displayFive.sort((a, b) => {
                if (a.name < b.name){
                    return -1;
                } 
                if (a.name > b.name){
                    return 1;
                }
                return 0; //default value
            })
        });
    }

    sortPop = () => {
        this.setState({
            displayFive: this.state.displayFive.sort((a, b) =>  a.popularity > b.popularity ? -1 : 1)
        })
    }

    deleteContactHandler = (id) => {
        this.setState((state) => {
            return{
                displayFive: state.displayFive.filter(contact => contact.id !== id)
            }
        })
    }
    

    render() {
        const { displayFive } = this.state;
        return (
            <div>
            <button onClick={this.addContactHandler}>Add Random Contact</button>
            <button onClick={this.sortName}>Sort by name</button>
            <button onClick={this.sortPop}>Sort by popularity</button>
           
            <table>
                <tr>
                    <th>Pictures</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                
                <tr> 
                    {displayFive.map((contact) => {
                         return <div>
                       <td><img width="50" src= {contact.pictureUrl} /></td>  
                       <td>{contact.name}</td>
                       <td>{contact.popularity.toFixed(2)}</td>
                       <td> <button onClick={() => this.deleteContactHandler(contact.id)}>Delete Contact</button>
</td>
                         
                    </div> 
                })}
                </tr>
            </table> 
            
        </div>
        )
    }
}


export default DisplayFive;