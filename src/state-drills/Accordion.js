import React from 'react';

class Accordion extends React.Component {
    state = {
        currentSectionIndex: null
    };
    
    handleButtonClick(index) {
        this.setState({currentSectionIndex: index})
    } 
    
    renderSection(currentSectionIndex) {       
        return this.props.sections.map((section, index) => (
            <li>
                <button type='button' onClick={
                    () => this.handleButtonClick(index)
                }>
                    {section.title}
                </button>
                {currentSectionIndex === index && <p>{section.content}</p>}
            </li>
        ))  
    }
    
    render() {
        const {currentSectionIndex} = this.state;
        return (
            <ul>
                {this.renderSection(currentSectionIndex)}
            </ul>
        );
    }
}

export default Accordion;