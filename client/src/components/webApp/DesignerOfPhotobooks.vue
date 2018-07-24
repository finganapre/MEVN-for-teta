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

          <transition name="flip" mode="out-in">
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
        </transition>

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
                    src: 'https://s1.1zoom.ru/prev2/536/Tigers_Painting_Art_Night_Glance_535374_300x200.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'http://for-androidos.com/uploads/posts/2016-02/1454432563_logo.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'http://pristor.ru/wp-content/uploads/2017/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%B8-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%90%D0%BD%D0%B4%D0%B5%D1%80%D1%82%D0%B5%D0%B9%D0%BB-%D0%90%D0%B7%D1%80%D0%B8%D1%8D%D0%BB%D1%8C-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-15.jpg' // db in future
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
                    src: 'https://i.ytimg.com/vi/0u0YVmvmb8Y/maxresdefault.jpg' // db in future
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
                    src: 'http://s1.1zoom.me/big0/930/Coast_Sunrises_and_sunsets_Waves_USA_Ocean_Kaneohe_521540_1280x775.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7SOaqUs8Q3CA-6bVK6yI23mcGPI4UlC449Db8VjTmejQQook7' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'https://s1.1zoom.ru/big0/68/379017-svetik.jpg' // db in future
                  },
                  {
                    position: 'adapt', // standart
                    src: 'http://minionomaniya.ru/wp-content/uploads/2016/01/%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D1%8B-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8B-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg', // db in future
                    description: 'descr'
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
                    src: 'https://www.greenwaveraglan.com/wp-content/uploads/2016/01/GW-2.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFYUJ8Lia0TjOKPec6L4KYNB2zpwNk_RsUSbFX4zeXc8JSglY' // db in future
                  }
                ]
              },
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: 'https://cdn.fishki.net/upload/post/2017/03/19/2245758/tn/02-funny-cat-wallpapercat-wallpaper.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6giVpc1eCRSHwDw8Tm6SE4jwqZGhjyM8z9vd5_ftMcx2TLJK0' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'http://koshsps.ru/image/trehcvetnye-koshki.jpg' // db in future
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
                    src: 'https://i.ytimg.com/vi/8582Bo159t8/maxresdefault.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'https://i.ytimg.com/vi/6nZLLENs-eU/maxresdefault.jpg' // db in future
                  }
                ]
              },
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamNf6JcUuKunVSS6Seskgn3RxxCNI8x7Hq_H-XY1q883YQNzT' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'https://i03.fotocdn.net/s22/225/public_pin_m/81/2557235424.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'http://w3.wallls.com/uploads/high-thumbnail/201602/23/84746.jpg' // db in future
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
                    src: 'http://kartinki24.ru/uploads/posts/2009-02/1234184976_dogs1_preview.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'http://www.gandex.ru/upl/oboi/u10302_5719_seva-5.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'http://bm.img.com.ua/nxs/img/prikol/images/large/3/9/315193.jpg' // db in future
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
                    src: 'http://mobilepics.ru/uploads/pictures/big_images/9409718.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'https://cs10.pikabu.ru/post_img/2018/01/14/7/1515929175189039857.jpg' // db in future
                  }
                ]
              },
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: 'http://www.prikol.ru/wp-content/gallery/october-2017/kartinki-04102017-001.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'http://www.blogimam.com/wp-content/uploads/2017/03/besplatnye-kartinki.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'http://kaifolog.ru/uploads/posts/2016-04/thumbs/1460123100_001.jpg' // db in future
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
                    src: 'http://goodimg.ru/img/kartinki-na-rabochiy-priroda2.jpg' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'http://1079638729.rsc.cdn77.org/pic/v2/gallery/preview/fentezi-gory-luna-more-oblaka-pejzazh-26587.jpg' // db in future
                  }
                ]
              },
              {
                template: '', // className
                photos: [
                  {
                    position: 'adapt', // standart
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzVOtGEnAdPLD2h4tyP2Is-estf9Bj_07rEdAkSo9VtDELFpx' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'http://surprisse.com/muscards/view/2015/10/02/19u88uda350c0fhon5u9nsuma35chmdl.gif' // db in future
                  },
                  {
                    position: 'standart', // adapt
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLJQjaAimIZwSo7_7TS1tvehmXBfqJrLs6_KAQfMROVeTLfE6' // db in future
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
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.PhotoBookSpread{
  /*display: table;
  content: '';*/
  width: 100%;
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

/* Animation */
  .flip-leave{
  }
  .flip-leave-to{
  }
  .flip-leave-active{
    animation: flipOutX 10s linear
  }
  .flip-enter{
  }
  .flip-enter-to{
  }
  .flip-enter-active{
    animation: flipInX 10s linear
  }

  @keyframes flipInX{
      from{
        transform: rotateX(90deg)
      }
      to{
        transform: rotate(0deg)
      }
  }
  @keyframes flipOutX{
    from{
      transform: rotateX(0deg)
    }
    to{
      transform: rotateX(90deg)
    }
  }

</style>