// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import uuidv4 from 'uuid/v4'
import './style.css'

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.id = uuidv4()
  }
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    form: PropTypes.bool,
    width: PropTypes.number,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }
  render() {
    const checked =
      this.props.checked ||
      (this.props.hasOwnProperty('checked') && !!this.props.checked !== false)
    const disabled =
      this.props.disabled ||
      (this.props.hasOwnProperty('disabled') && !!this.props.disabled !== false)
    return (
      <div className={classNames('control', { 'form-input': this.props.form })}>
        <input
          key="checkbox"
          type="checkbox"
          className="checkbox"
          id={this.id}
          name={this.props.name}
          checked={checked}
          disabled={disabled}
          onChange={this.props.onChange}
        />
        {this.props.form ? (
          <label key="label" htmlFor={this.id}>
            <span>{checked ? '???' : ''}</span>
            {this.props.label}
          </label>
        ) : (
          <label key="label" htmlFor={this.id}>
            <div style={{ width: `${this.props.width}px` }}>
              {this.props.label}
            </div>
            <span>{checked ? '???' : ''}</span>
          </label>
        )}
      </div>
    )
  }
}
