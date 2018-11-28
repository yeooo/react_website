import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div `
  height:58px;
  border-bottom:1px solid #f0f0f0;
`

export const NavContainer = styled.div `
  position:relative;
  min-width: 768px;
  max-width: 1440px;
  margin:0 auto;
`

export const Logo = styled.a.attrs({
  href: '/'
})
`
  float:left;
  display:block;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size:contain;
`

export const Nav = styled.div `
  width:960px;
  height:100%;
  margin:0 auto;
  padding-right:70px;
  box-sizing:border-box;
`
export const NavItem = styled.div `
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333; 
  &.left {
    float:left;
  }
  &.active {
    color:#ea6f5a;
  }
`

export const SearchWrapper = styled.div `
  position:relative;
  float:left;
  .zoom {
    position:absolute;
    right:2px;
    bottom:5px;
    width:30px;
    height:30px;
    border-radius:15px;
    line-height:30px;
    text-align:center;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`

export const SearchInfo = styled.div `
  position:absolute;
  left:20px;
  top:56px;
  padding 0 20px;
  width:240px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background:#fff;
`;

export const SearchInfoTitle = styled.div `
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;

export const SearchInfoSwitch = styled.span `
  float:right;
  font-size:13px;
  cursor:pointer;
  .spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition:all .2s ease-out;
    transform:rotate(0deg);
    transform-origin:center center;
  }
`;

export const SearchInfoList = styled.div `
  overflow:hidden;
`;

export const SearchInfoItem = styled.a `
  display:block;
  float:left;
  padding:0 5px;
  margin-right:10px;
  margin-bottom:10px;
  line-height:20px;
  font-size:12px;
  color:#787878;
  border:1px solid #ddd;
  border-radius:3px;
  :hover{
    color:#333;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})
`
  margin-top:9px;
  margin-left:20px;
  padding:0 35px 0 20px;
  width:160px;
  height:38px;
  border:none;
  outline:none;
  border-radius:19px;
  box-size:border-box;
  background:#eee;
  font-size:14px;
  color:#666;
  &::placeholder{
    color:#999
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{
    transition:all .2s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition:all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
`

export const Addition = styled.div `
  position:absolute;
  right:0;
  top:0;
  height:56px;
`

export const AdditionLink = styled.a `
  display:block;
  float:right;
  margin-top:9px;
  padding:0 15px;
  line-height:38px;
  font-size:14px;
  color:#333; 
  &.btn{
    margin-right:20px;
    border-radius:19px;
    padding:0 20px;
    border:1px solid #ec6419;
    color:#ec6149;
  }
  &.writing{
    margin-left:15px;
    background:#ec6419;
    color:#fff;
  }
`