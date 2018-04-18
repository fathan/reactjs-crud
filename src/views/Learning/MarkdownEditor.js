import React, { Component } from 'react'
import Remarkable from 'remarkable'

export class MarkdownEditor extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: 'Hello, Fathan Rohman'
    }
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  getRawmarkup () {
    const md = new Remarkable()
    return {
      __html: md.render(this.state.value)
    }
  }
 
  render() {
    return (
      <div>
        <h3>Input</h3>
        <label htmlFor="markdown-content">Enter some makrdown</label>
        <br/>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawmarkup()}
        ></div>
      </div>
    )
  }
}

export default MarkdownEditor
