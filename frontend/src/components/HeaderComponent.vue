<template>
  <div>
    <div class="header">
      <div class="header__navigation">
            <router-link v-for='link in links' :key="link.id" :to="link.url" class="header__navigation__link">
                {{ link.title }}
            </router-link>
      </div>
      <div class="menu">
        <input type="checkbox" id="burger__checkbox" class="burger__checkbox">
        <label for="burger__checkbox" class="burger"></label>
        <ul class="menu__list">
          <li><router-link v-for='link in links' :key="link.id" :to="link.url" class="menu__item">
                {{ link.title }}
            </router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
        links:[
          {url:'home',
          title:'Общая информация'
          }, 
          {url:'standart',
          title:'Проекты стандартов'
          }, 
          {url:'admin',
          title:'Для администратора'
          },
          {url:'superadmin',
            title:'superadmin'
          },
          {url:'news',
          title:'Новости'
          }, 
          {url:'contact',
          title:'Контакты'
          }
      ]
    };
  },
};
</script>

<style lang="scss" scoped >
  @import "@/assets/css-module/_vars.scss";
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
            }      
  a {
    text-decoration: none;
    color: $colorTitle;
            }
  .header{
    background-color: $colorBack;
    height: 100px;
    &__navigation{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: calc((50% - 1140px/2) + 10px);
      margin-right: calc((50% - 1140px/2) + 10px);
      color: $colorTitle;
      font-family: Lato;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
        &__link{
            margin-top: 50px;
        }
    }
}
.menu{
  display: none;
}
@media screen and (min-width:767px) and (max-width: 1139px) {
  $widthSite:767px;
  .header{
    &__navigation{
      margin-left: calc((50% - $widthSite/2) + 10px);
      margin-right: calc((50% - $widthSite/2) + 10px);
    }
  }
}
@media screen and (min-width:320px) and (max-width: 766px) {
  $widthSite:320px;
  .header{
    &__navigation{
      display: none;
    }
  }
  .menu{
    display: block;
  }
.burger {
  position: relative;
  z-index: 1;
  cursor: pointer;
  display: block;
  position: relative;
  border: none;
  background: transparent;
  width: 40px;
  height: 26px;
  &__checkbox{
    position: absolute;
    visibility: hidden;
  }
}
.burger::before,
.burger::after {
  content: '';
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background:$colorTitle;
}
.burger::before {
  top: 0;
  box-shadow: 0 11px 0 $colorTitle;
  transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
}
.burger::after {
  bottom: 0;
  transition: bottom .3s .15s, transform .3s;
}
.burger__checkbox:checked + .burger::before {
  top: 11px;
  transform: rotate(45deg);
  box-shadow: 0 6px 0 rgba(0,0,0,0);
  transition: box-shadow .15s, top .3s, transform .3s .15s;
}
.burger__checkbox:checked + .burger::after {
  bottom: 11px;
  transform: rotate(-45deg);
  transition: bottom .3s, transform .3s .15s;
}
.menu__list {
  top: 0;
  left: 0;
  position: absolute;
  display: grid;
  gap: 12px;
  padding: 42px 0;
  margin: 0;
  background: $colorPink;
  list-style-type: none;
  transform: translateX(-100%);
  transition: .3s;
  width: 200px;
}
.menu__item {
  display: block;
  padding: 8px;
  color: $colorTitle;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  font-family: Lato;
}
.menu__item:hover {
  background: rgba(255,255,255,.2)
}
.burger__checkbox:checked ~ .menu__list {
  transform: translateX(0);
}
  }
</style>