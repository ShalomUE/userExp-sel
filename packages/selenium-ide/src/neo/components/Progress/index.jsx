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
import './style.css'

export default class Progress extends React.Component {
  static propTypes = {
    hasError: PropTypes.bool,
    progress: PropTypes.number,
    totalProgress: PropTypes.number,
  }
  static defaultProps = {
    progress: 0,
    totalProgress: 0,
  }
  render() {
    return (
      <progress
        className={classNames('progress', { 'has-error': this.props.hasError })}
        value={this.props.progress}
        max={this.props.totalProgress}
      />
    )
  }
}
