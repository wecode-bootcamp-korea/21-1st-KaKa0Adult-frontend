import React, { Component } from 'react';
import { characterData } from '../../Data/characterData';
import { categoryData } from '../../Data/categoryData';
import Menu from './Menu';
import './index.scss';

class AsideMenu extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      categories: [],
      isSlide: false,
      user: '',
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('user_name');

    user
      ? this.setState({
          characters: characterData,
          categories: categoryData,
          isSlide: true,
          user: user,
        })
      : this.setState({
          characters: characterData,
          categories: categoryData,
          isSlide: true,
        });
  }

  onToggleSlide = () => {
    const { isSlide } = this.state;
    this.setState({ isSlide: !isSlide });
  };

  render() {
    const { user, characters, categories, isSlide } = this.state;
    const { isOpen, onToggleSideMenu } = this.props;

    return (
      <div
        className={isSlide ? 'sideMenuWrap openBg' : 'sideMenuWrap'}
        onClick={onToggleSideMenu}
      >
        <Menu
          isOpen={isOpen}
          isSlide={isSlide}
          user={user}
          characters={characters}
          categories={categories}
        />
      </div>
    );
  }
}

export default AsideMenu;
