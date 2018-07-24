<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <v-app>
    	<!-- Start NAVBAR -->
    		<v-layout
    			wrap
    		>
    		
    			<v-navigation-drawer
    				v-model="mainNavbarDrawer"
    				fixed
    				temporary
    			>
    				<v-list class="pa-1">
    					<v-list-tile avatar>
    						<v-list-tile-avatar>
    							<img src="https://randomuser.me/api/portraits/men/85.jpg" >
    						</v-list-tile-avatar>
    						
    						<v-list-tile-content>
    							<v-list-tile-title>{{ userName }}</v-list-tile-title>
    						</v-list-tile-content>
    					</v-list-tile>
    				</v-list>
    				
    				<v-list class="pt-0" dense>
    				<v-divider></v-divider>
    				
    				<v-list-tile
    					v-for="item in mainNavbarMenuList"
    					:key="item.title"
    					:to="item.link"
    					@click=""
    				>
    					<v-list-tile-action>
    						<v-icon>{{ item.icon }}</v-icon>
    					</v-list-tile-action>
    					
    					<v-list-tile-content>
    						<v-list-tile-title>{{ item.title }}</v-list-tile-title>
    					</v-list-tile-content>
    				</v-list-tile>
    				<!-- START Services -->
    				<v-list-group
    					prepend-icon="extension"
    					
    				>
    					<v-list-tile slot="activator">
    						<v-list-tile-title>Веб-приложения</v-list-tile-title>
    					</v-list-tile>
    					<v-list-tile
    						v-for="(service, i) in mainNavbarMenuListServices"
    						:key="i"
    						@click=""
    						:to="service[2]"
    					>
    						<v-list-tile-title
    							v-text="service[0]"
    						>
    						</v-list-tile-title>
    						<v-list-tile-action>
    							<v-icon v-text="service[1]"></v-icon>
    						</v-list-tile-action>
    					</v-list-tile>
    				</v-list-group>
    				<!-- END Services -->
    				</v-list>
    			</v-navigation-drawer>
    		</v-layout>
    		<!-- End NAVBAR -->
    <div class="mainWrapper">
      <MainHeader
        id="MainHeader"
      	:siteName="siteName"
				:siteDescription="siteDescription"
				@changeMainNavState="openCloseMainNav"
				@openAppMenu="openAppMenu"
				:appsList="mainNavbarMenuListServices">
			</MainHeader>
      <main class="mainContent" :style="spacingForMainHeader">
      	<!-- <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular> -->
        <router-view/>
      </main>
    
    <MainFooter></MainFooter>
    </div>
    </v-app>
  </div>
</template>

<script>
import MainHeader from './components/stdElem/MainHeader.vue'
import MainFooter from './components/stdElem/MainFooter.vue'

export default {
  name: 'App',
  data(){
    // 
    return {
      siteName: 'Тета',
			siteDescription: 'веб-приложения',

			mainNavbarDrawer: null,
			userName: 'user name',

			mainNavbarMenuList: [
				{title: 'На главную', icon: 'home', link: '/'},
				{title: 'Новости', icon: 'rss_feed', link: '/posts'},
				{title: 'Контакты', icon: 'contacts', link: '/contacts'},
				{title: 'О нас', icon: 'business', link: '/about'},
				{title: 'Основной сайт', icon:'public', link: '/tetadesign'},
				{title: 'Проект Superclass', icon:'public', link: '/superclass'}
			],
			mainNavbarMenuListServices: [
				['Конструктор фотокниг', 'extension', '/designer-of-photobooks'],
				['Конструктор багетов', 'extension', '/baguette-designer']
			]
    }
  },
  methods:{
  	openCloseMainNav(){
  		this.mainNavbarDrawer = !(this.mainNavbarDrawer);
  	},
  	openAppMenu(){

  	}
  },
  computed:{
    spacingForMainHeader(){
      console.log(this.$refs);
      /*let mainHeader = this.$el;
      console.log(this.$el);*/
      return 'margin-top: 64px';
    }
  },
  mounted(){
    //this.spacingForMainHeader();
  },
  
  components: {
  	MainHeader: MainHeader,
  	MainFooter: MainFooter
  }
}
</script>

<style>
.mainWrapper{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.mainContent{
  flex: 1;
}
body{
  font-size: 16px;
}

/* standart Paddings */
.no-h-pd{
  padding-left: 0;
  padding-right: 0;
}
</style>
