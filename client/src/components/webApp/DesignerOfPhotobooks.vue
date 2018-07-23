<template>
  <div>
  <v-container tag="section">
    <h2>Конструктор фотокниг</h2>
    <v-alert
    	:value="true"
      color="warning"
      icon="priority_high"
      outline
    >
    Сервис в разработке
    </v-alert>
  </v-container>

  <v-container tag="section" class="text-xs-center" v-for="(photoBook, index) in photoBooks" :key="photoBook.id">  
    <v-layout justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <h3>{{ photoBook.bookTitle }}</h3>
          </v-card-text>
          <v-card-text>
            
            <v-pagination
              v-model="photoBook.currentSpread"
              :length="photoBook.spreads.length"
            >
            </v-pagination>
          </v-card-text>
          <v-card-text class="PhotoBook__book">
            <div
              class="PhotoBookSpread"
              v-for="(phtoBookSpread, spreadIndex) in photoBook.spreads"
              v-if="photoBook.currentSpread == spreadIndex + 1"
              :key="spreadIndex"
              >

                <div
                  class="PhotoBookPage"
                  v-for="(page, pageIndex) in phtoBookSpread"
                  >
                  <header
                    class="PhotoBookPage__header"
                    :class="hFdirection(pageIndex)"
                  >

                    <div class="PhotoBookPage__pageNumber">
                      {{ 'стр ' + pageNumber(pageIndex, spreadIndex) }}
                    </div>
                    <div class="PhotoBookPage__opt">
                      <div>opt1</div>
                      <div>opt2</div>
                    </div>
                    
                  </header>
                  <section
                    class="PhotoBookPage__content"
                    :class="pageTemplate"
                  > 
                    <div
                      class="PhotoBookPage__content__photoContainer"
                      v-for="photo in page.photos"
                    >
                      <img
                        class="PhotoBookPage__content__photoContainer__photo"
                        :src="photo.src"
                        :alt="photo.description"
                      >
                    
                      
                    </div>
                    
                  </section>
                  <footer
                    class="PhotoBook__footer"
                    :class="hFdirection(pageIndex)"
                  >
                    <div class="PhotoBookPage__pageNumber">
                      {{ 'стр ' + pageNumber(pageIndex, spreadIndex) }}
                    </div>
                    <div class="PhotoBookPage__opt">
                      <div>opt1</div>
                      <div>opt2</div>
                    </div>
                  </footer>
                
              </div>
            </div>
          </v-card-text>

          <v-card-text>
            
            <v-pagination
              v-model="photoBook.currentSpread"
              :length="photoBook.spreads.length"
            >
            </v-pagination>
          </v-card-text>
        </v-card>
      </v-flex> 
    </v-layout>
  </v-container>

  </div>
  		
</template>

<script>
export default {
  name: 'DesignerOfPhotobooks',
  data () {
    return {
      photoBooks: [
        {
          id: 1,
          bookTitle: 'Название книги 1',
          currentSpread: 1,
          spreads: [
            [
              {
                pageNumber: Number,
                pageDirection: 'left',
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: 'http://minionomaniya.ru/wp-content/uploads/2016/01/%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D1%8B-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8B-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg', // db in future
                    description: 'descr'
                  },
                  {
                    position: 'standart', // adapt
                    src: 'http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg' // db in future
                  }
                ]
              },
              {
                pageNumber: Number,
                pageDirection: 'right',
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              }
            ],
            [
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              },
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              }
            ],
            [
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              },
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              }
            ],
            [
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              },
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              }
            ],
            [
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              },
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              }
            ],
            [
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              },
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              }
            ],
            [
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              },
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: '' // db in future
                  }
                ]
              }
            ]
          ]
        },
        {
          id: 2,
          bookTitle: 'Название книги 2',
          currentSpread: 3,
          spreads: [
            [
              {

              },
              {

              }
            ],
            [
              {
                
              },
              {

              }
            ],
            [
              {
                
              },
              {

              }
            ],
            [
              {
                
              },
              {

              }
            ],
            [
              {
                
              },
              {

              }
            ],
            [
              {
                
              },
              {

              }
            ]
          ]
        },
      ]
    }
  },
  methods: {
    pageNumber(pageIndex, spreadIndex){

      var pageNumber = 0;

      var rPageNumber = (spreadIndex + 1) * 2;
      var lPageNumber = rPageNumber - 1;


      if (pageIndex == 0){

        // левая страница
        pageNumber = lPageNumber;

      } else if (pageIndex == 1) {

        // правая страница
        pageNumber = rPageNumber;

      } else {

        console.log('unknow page index');

      }


      return pageNumber;
    },


    hFdirection(pageIndex){

      if ( pageIndex == 0 ) {

        // левая страница
        return 'left-dir'

      } else if ( pageIndex == 1 ) {

        // правая страница
        return 'right-dir'

      } else {

        console.log('unknow page direction');
      }

    },

    pageTemplate(){
      // 1. получаем кол-во фото при загрузке
      //    1.1 если шаблон не установлен - ставим первый подходящий
      //    1.2 если установлен
      //        1.2.1 проверяем подходит ли он для кол-ва фоток и ставим
      //        1.2.2 ставим первый подходящий
      // 2. получаем сигнал на смену шаблона от пользователя
      //    2.1 ставим следующий по порядку
      // 3. получаем сигнал на добавление фотки
      //    3.1 ставим первый подходящий
      return 'className';
    }
  }
}
</script>


<style scoped>
.PhotoBook__book {
  /*display: table;
  content: '';*/

  display: flex;
  flex-direction: row;
  justify-content: center;
}
.PhotoBookSpread{
  /*display: table;
  content: '';*/
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

}
.PhotoBookPage{
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: maroon;
  color: white;
  align-items: stretch;
}
.PhotoBookPage__header{
  background-color: green;
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 5px 10px;
  align-items: center;
  justify-content: space-between;
}

.PhotoBookPage__content{
  background-color: blue;
  color: black;
  display: grid;
  grid-gap: 20px;
  height: 100%;
}

.PhotoBookPage__content__photoContainer{
  border: 2px dashed gray;
}

.PhotoBookPage__content__photoContainer__photo{
  width: 100%;
  height: auto;
}

.PhotoBookPage__opt{
  display: flex;
  flex-direction: row;
  width: 50%;
}
.PhotoBookPage__pageNumber{
  width: 50%;
  text-align: left;
}

.PhotoBook__footer{
  background-color: yellow;
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 5px 10px;
  align-items: center;
  justify-content: space-between;
}

.left-dir .PhotoBookPage__pageNumber{
  order: -1;
}
.left-dir .PhotoBookPage__opt{
  justify-content: flex-end;
}

.right-dir .PhotoBookPage__pageNumber{
  order: 2;
}
.right-dir .PhotoBookPage__pageNumber{
  text-align: right;
}
.right-dir .PhotoBookPage__opt{
  flex-direction: row-reverse;
  justify-content: flex-end;
}
</style>