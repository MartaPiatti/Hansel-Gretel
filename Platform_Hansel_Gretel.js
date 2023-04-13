/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/kgBafhQn
 *
 * This source requires Phaser 2.6.2
 */

 var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload(){

  game.load.image('background1', 'AssetsDefinitivi/background1.png');
  game.load.image('background2', 'AssetsDefinitivi/background2.png');
  game.load.image('background3', 'AssetsDefinitivi/background3.png');
  game.load.image('background4', 'AssetsDefinitivi/background4.png');
  game.load.image('cartelloCP', 'AssetsDefinitivi/checkpoint.png');
  game.load.image('inventario', 'AssetsDefinitivi/inventario.png');
  game.load.image('aggiunta5', 'AssetsDefinitivi/5.png');
  game.load.image('aggiunta2', 'AssetsDefinitivi/2.png');
  game.load.image('sottratto5', 'AssetsDefinitivi/_5.png');
  game.load.image('vinto', 'AssetsDefinitivi/maga.jpg');
  game.load.image('vintoRegalo', 'AssetsDefinitivi/maga_regalo.jpg');
  game.load.image('perso', 'AssetsDefinitivi/padre.jpg');
  game.load.image('next', 'AssetsDefinitivi/avanti.png');
  //aggiungo animazione salto
  game.load.spritesheet('hansel', 'AssetsDefinitivi/hansel.png', 83, 150);
  game.load.spritesheet('gretel', 'AssetsDefinitivi/gretel.png', 83, 150);
  game.load.spritesheet('gretel_abbassata', 'AssetsDefinitivi/gretel_abbassata.png', 83, 75);
  game.load.image('pausa', 'AssetsDefinitivi/pausa.png');
  game.load.image('play', 'AssetsDefinitivi/play.png');
  game.load.image('skip', 'AssetsDefinitivi/skip.png');
  game.load.image('caramella1', 'AssetsDefinitivi/caramella1.png');
  game.load.image('caramella2', 'AssetsDefinitivi/caramella2.png');
  game.load.image('caramella3', 'AssetsDefinitivi/caramella3.png');
  game.load.image('muffin', 'AssetsDefinitivi/muffin.png');
  game.load.image('pacco', 'AssetsDefinitivi/regalo.png');
  //piattaforme
  game.load.image('platform1', 'AssetsDefinitivi/p1.png');
  game.load.image('platform2', 'AssetsDefinitivi/p2.png');
  game.load.image('platform4', 'AssetsDefinitivi/p4.png');
  game.load.image('platform5', 'AssetsDefinitivi/p5.png');
  game.load.image('platform6', 'AssetsDefinitivi/p6.png');
  game.load.image('platform7', 'AssetsDefinitivi/p7.png');
  game.load.image('platform8', 'AssetsDefinitivi/p8.png');
  game.load.image('platform9', 'AssetsDefinitivi/p9.png');
  game.load.image('platform10', 'AssetsDefinitivi/p10.png');
  game.load.image('platform11', 'AssetsDefinitivi/p11.png');
  game.load.image('platform12', 'AssetsDefinitivi/p12.png');
  game.load.image('platform13', 'AssetsDefinitivi/p13.png');
  game.load.image('platform14', 'AssetsDefinitivi/p14.png');
  game.load.image('platform15', 'AssetsDefinitivi/p15.png');
  game.load.image('platform16', 'AssetsDefinitivi/p16.png');
  game.load.image('platform17', 'AssetsDefinitivi/p17.png');
  game.load.image('platform18', 'AssetsDefinitivi/p18.png');
  game.load.image('platform19', 'AssetsDefinitivi/p19.png');
  game.load.image('platform20', 'AssetsDefinitivi/p20.png');
  game.load.image('platform21', 'AssetsDefinitivi/p21.png');
  game.load.image('platform22', 'AssetsDefinitivi/p22.png');
  game.load.image('platform23', 'AssetsDefinitivi/p23.png');
  game.load.image('platform24', 'AssetsDefinitivi/p24.png');
  game.load.image('platform25', 'AssetsDefinitivi/p25.png');
  game.load.image('platform26', 'AssetsDefinitivi/p26.png');
  game.load.image('platform27', 'AssetsDefinitivi/p27.png');
  game.load.image('platform28', 'AssetsDefinitivi/p28.png');
  game.load.image('platform29', 'AssetsDefinitivi/p29.png');
  game.load.image('platform30', 'AssetsDefinitivi/p30.png');
  game.load.image('platform31', 'AssetsDefinitivi/p31.png');
  game.load.image('platform32', 'AssetsDefinitivi/p32.png');
  game.load.image('platform33', 'AssetsDefinitivi/p33.png');
  game.load.image('platform34', 'AssetsDefinitivi/p34.png');
  game.load.image('platform35', 'AssetsDefinitivi/p35.png');
  game.load.image('platform36', 'AssetsDefinitivi/p36.png');
  game.load.image('platform37', 'AssetsDefinitivi/p37.png');
  game.load.image('platform38', 'AssetsDefinitivi/p38.png');
  game.load.image('platform39a', 'AssetsDefinitivi/p39a.png');
  game.load.image('platform39b', 'AssetsDefinitivi/p39b.png');
  game.load.image('platform40', 'AssetsDefinitivi/p40.png');
  game.load.image('platform41', 'AssetsDefinitivi/p41.png');
  game.load.image('platform42', 'AssetsDefinitivi/p42.png');
  game.load.image('platform43', 'AssetsDefinitivi/p43.png');
  game.load.image('platform44', 'AssetsDefinitivi/p44.png');
  game.load.image('platform45', 'AssetsDefinitivi/p45.png');
  game.load.image('platform46', 'AssetsDefinitivi/p46.png');
  game.load.image('platform47', 'AssetsDefinitivi/p47.png');
  game.load.image('platform48', 'AssetsDefinitivi/p48.png');
  game.load.image('platform49', 'AssetsDefinitivi/p49.png');
  game.load.image('platform50', 'AssetsDefinitivi/p50.png');
  game.load.image('platform51', 'AssetsDefinitivi/p51.png');
  game.load.image('platform52', 'AssetsDefinitivi/p52.png');
  game.load.image('platform01', 'AssetsDefinitivi/p01.png');
  game.load.image('platform02', 'AssetsDefinitivi/p02.png');
  game.load.image('bigblock', 'AssetsDefinitivi/bigblock.png');
  game.load.image('cadente', 'AssetsDefinitivi/cadente.png');
  game.load.image('smallblock', 'AssetsDefinitivi/smallblock.png');
  game.load.image('fungo', 'AssetsDefinitivi/fungo.png');

  game.load.image('noAlzarsi', 'AssetsDefinitivi/noAlzarsi.png');
  game.load.image('noAlzarsi1', 'AssetsDefinitivi/r1.png');
  game.load.image('noAlzarsi2', 'AssetsDefinitivi/r2.png');
  game.load.image('noAlzarsi3', 'AssetsDefinitivi/r3.png');
  game.load.image('noAlzarsi4', 'AssetsDefinitivi/r4.png');
  game.load.image('noAlzarsi5', 'AssetsDefinitivi/r5.png');
  game.load.image('noAlzarsi6', 'AssetsDefinitivi/r6.png');
  game.load.image('noAlzarsi7', 'AssetsDefinitivi/r7.png');
  game.load.image('noAlzarsi8', 'AssetsDefinitivi/r8.png');
  game.load.image('platform2b', 'AssetsDefinitivi/p2b.png');
  game.load.image('platform12b', 'AssetsDefinitivi/p12b.png');
  game.load.image('platform12c', 'AssetsDefinitivi/p12c.png');
  game.load.image('platform22b', 'AssetsDefinitivi/p22b.png');
  game.load.image('platform25b', 'AssetsDefinitivi/p25b.png');
  game.load.image('platform28b', 'AssetsDefinitivi/p28b.png');
  game.load.image('platform38b', 'AssetsDefinitivi/p38b.png');
}

var player;
var platforms;
var fallingplatform1;
var fallingplatform2;
var fallingplatform3;
var fallingplatform4;
var fallingplatform5;
var cursors;
var caramella11;
var caramella12;
var caramella13;
var caramella14;
var caramella15;
var caramella16;
var caramella17;
var caramella18;
var caramella21;
var caramella22;
var caramella23;
var caramella24;
var caramella25;
var caramella26;
var caramella27;
var caramella31;
var caramella32;
var caramella33;
var caramella34;
var caramella35;
var caramella36;
var pacco;
var muffin1;
var muffin2;
var muffin3;
var muffin4;
var muffin5;
var muffin6;
var muffin7;
var muffin8;
var muffin9;
var muffin10;
var muffin11;
var muffin12;
var muffin13;
var muffin14;
var muffin15;
var muffin16;
var jumpButton;
var i; //controllo switch
var j; //controllo doppio salto
var c; //controllo timer
var k; //controllo gretel abbassata
var tpartenza;
var tarrivo;
var textMsg;
var tempo;
//var textGO; //testo game over
var skip;
var paused;
var tstop = 0;
var tplay = 0;
var switchButton;
var premuto;
var controlloSalto;
var checkPoint = {x:7020, y:1200, t:0, tf:0};
var checkCaramelle = {C1:0, C2:0, C3:0};
var tGO;
var background1;
var background2;
var background3;
var background4;
var aggiunta2;
var aggiunta5;
var sottratto5;
var vita;
var nCaramelle1;
var nCaramelle2;
var nCaramelle3;
var textCaramelle1;
var textCaramelle2;
var textCaramelle3;
var perso;
var noAlzarsi1;
var noAlzarsi2;
var noAlzarsi3;
var noAlzarsi4;
var noAlzarsi5;
var noAlzarsi6;
var noAlzarsi7;
var noAlzarsi8;
var up;
var gift;
var vinto;
var vintoRegalo;
var inventario;
var next;
var cartelloCP;

//game over
function gameOver() {
    tGO = game.time.totalElapsedSeconds();
    player.x = checkPoint.x;
    player.y = checkPoint.y;
    tarrivo = checkPoint.tf + (tGO - checkPoint.t);
    vita = true;
    platforms.children[83].x = 15880;
    platforms.children[86].x = 17230;
    platforms.children[87].x = 18300;
    platforms.children[101].x = 26300;
    platforms.children[110].x = 33100;
    platforms.children[111].x = 35100;
    platforms.children[112].x = 35300;
    platforms.children[122].x = 40300;
    platforms.children[124].x = 42900;
    platforms.children[126].x = 45500;
    game.time.events.add (1000, function() {
      player.visible = true;
      textMsg.visible = true;
      paused.visible = true;

      game.time.events.add (1000, function() {
        fallingplatform1.reset(5284, 486);
        fallingplatform2.reset(19177, 298);
        fallingplatform3.reset(36527, 338);
        fallingplatform4.reset(36834, 347);
        fallingplatform5.reset(37126, 535);

        game.physics.arcade.enable(fallingplatform1);
        game.physics.arcade.enable(fallingplatform2);
        game.physics.arcade.enable(fallingplatform3);
        game.physics.arcade.enable(fallingplatform4);
        game.physics.arcade.enable(fallingplatform5);

        fallingplatform1.body.gravity.y = 0;
        fallingplatform2.body.gravity.y = 0;
        fallingplatform3.body.gravity.y = 0;
        fallingplatform4.body.gravity.y = 0;
        fallingplatform5.body.gravity.y = 0;

        fallingplatform1.position.x = 5284;
        fallingplatform1.position.y = 486;
        fallingplatform2.position.x = 19177;
        fallingplatform2.position.y = 298;
        fallingplatform3.position.x = 36527;
        fallingplatform3.position.y = 338;
        fallingplatform4.position.x = 36834;
        fallingplatform4.position.y = 347;
        fallingplatform5.position.x = 37126;
        fallingplatform5.position.y = 535;
      })
    })

    nCaramelle1 = checkCaramelle.C1;
    nCaramelle2 = checkCaramelle.C2;
    nCaramelle3 = checkCaramelle.C3;
}

function create() {

  //pausa gioco
  function pausa(){
    if(game.paused === false){
      game.paused = true;
      tstop = game.time.totalElapsedSeconds();
      paused.loadTexture('play');
    }
  }

  game.input.onDown.add(resume, self);

  function resume(event) {
    if(game.paused){
      paused.loadTexture('pausa');
      tplay = game.time.totalElapsedSeconds();
      game.paused = false;
      tarrivo = tarrivo + (tplay - tstop);
      platforms.children[83].x = 15880;
      platforms.children[86].x = 17230;
      platforms.children[87].x = 18300;
      platforms.children[101].x = 26300;
      platforms.children[110].x = 33100;
      platforms.children[111].x = 35100;
      platforms.children[112].x = 35300;
      platforms.children[122].x = 40300;
      platforms.children[124].x = 42900;
      platforms.children[126].x = 45500;
      tGO = game.time.totalElapsedSeconds();
    }
  }

  i = 0;
  j = 0;
  l = 0;
  nCaramelle1 = 0;
  nCaramelle2 = 0;
  nCaramelle3 = 0;
  up = false;
  gift = false;
  game.world.setBounds(0,0,51372,2304);
  background1 = game.add.image(0, 0, 'background1');
  background2 = game.add.image(15000, 0, 'background2');
  background3 = game.add.image(30000, 0, 'background3');
  background4 = game.add.image(45000, 0, 'background4');
  cartelloCP = game.add.image(32300, 1235, 'cartelloCP');
  noAlzarsi1 = game.add.physicsGroup();
  noAlzarsi1.create(2420, 1750, 'noAlzarsi1');
  noAlzarsi1.setAll('body.immovable', true);

  noAlzarsi2 = game.add.physicsGroup();
  noAlzarsi2.create(12250, 1819, 'noAlzarsi2');
  noAlzarsi2.setAll('body.immovable', true);

  noAlzarsi3 = game.add.physicsGroup();
  noAlzarsi3.create(13300, 1819, 'noAlzarsi3');
  noAlzarsi3.setAll('body.immovable', true);

  noAlzarsi4 = game.add.physicsGroup();
  noAlzarsi4.create(19645, 1680, 'noAlzarsi4');
  noAlzarsi4.setAll('body.immovable', true);

  noAlzarsi5 = game.add.physicsGroup();
  noAlzarsi5.create(19515, 2224, 'noAlzarsi5');
  noAlzarsi5.setAll('body.immovable', true);

  noAlzarsi6 = game.add.physicsGroup();
  noAlzarsi6.create(21800, 1416, 'noAlzarsi6');
  noAlzarsi6.setAll('body.immovable', true);

  noAlzarsi7 = game.add.physicsGroup();
  noAlzarsi7.create(24807, 1026, 'noAlzarsi7');
  noAlzarsi7.setAll('body.immovable', true);

  noAlzarsi8 = game.add.physicsGroup();
  noAlzarsi8.create(25430, 1994, 'noAlzarsi8');
  noAlzarsi8.setAll('body.immovable', true);

  platforms = game.add.physicsGroup();

  platforms.create(8500, 1305, 'platform01');
  platforms.create(8715, 1200, 'platform02');
  platforms.create(0, 1420, 'platform1');
  platforms.create(1820, 1750, 'platform2');

  platforms.create(3478, 1670, 'platform4');
  platforms.create(3568, 1540, 'platform4');
  platforms.create(3658, 1410, 'platform4');
  platforms.create(3748, 1410, 'platform5');
  platforms.create(10998, 1410, 'platform6');
  platforms.create(11518, 1410, 'platform7');
  platforms.create(11585, 1305, 'platform01');
  platforms.create(11790, 1200, 'platform02');
  platforms.create(12250, 1540, 'platform8');
  platforms.create(13300, 1540, 'platform8');
  platforms.create(2180, 0, 'platform9');
  platforms.create(2420, 1420, 'platform10');
  platforms.create(10998, 2099, 'platform11');
  platforms.create(11798, 1819, 'platform12');
  platforms.create(13290, 0, 'platform13');
  platforms.create(13000, 1410, 'platform14');
  platforms.create(14770, 1825, 'platform15');
  platforms.create(15162, 1625, 'platform16');
  platforms.create(19315, 0, 'platform13');
  platforms.create(15332, 1410, 'platform17');
  platforms.create(18620, 1300, 'platform18');
  platforms.create(19270, 1300, 'platform19');
  platforms.create(19620, 1470, 'platform20');
  platforms.create(20065, 1305, 'platform21');
  platforms.create(19493, 1680, 'platform22');
  platforms.create(19270, 1680, 'platform23');
  platforms.create(19270, 1930, 'platform23');
  platforms.create(20040, 1850, 'platform23');
  platforms.create(18940, 1799, 'platform24');
  platforms.create(19167, 2224, 'platform25');
  platforms.create(20435, 2114, 'platform26');
  platforms.create(20480, 1620, 'platform27');
  platforms.create(20665, 1416, 'platform28');
  platforms.create(21030, 1050, 'platform29');
  platforms.create(21610, 1210, 'platform30');
  platforms.create(24640, 0, 'platform31');
  platforms.create(24810, 850, 'platform32');
  platforms.create(24640, 1026, 'platform33');
  platforms.create(25090, 1416, 'platform34');
  platforms.create(25430, 1806, 'platform35');
  platforms.create(26370, 1739, 'platform36');
  platforms.create(26100, 1576, 'platform37');
  platforms.create(24920, 1994, 'platform38');
  platforms.create(26440, 1416, 'platform39a');

  platforms.create(27400, 1311, 'platform01');
  platforms.create(27615, 1206, 'platform02');
  platforms.create(38045, 0, 'platform40');
  platforms.create(38045, 971, 'platform41');
  platforms.create(38845, 0, 'platform42');
  platforms.create(44682, 775, 'platform43');
  platforms.create(44997, 1000, 'platform44');
  platforms.create(38595, 2134, 'platform45');
  platforms.create(38920, 2029, 'platform01');
  platforms.create(39080, 1924, 'platform02');
  platforms.create(40500, 1420, 'platform46');//58
  platforms.create(41965, 1420, 'platform47');//59
  platforms.create(43400, 1644, 'platform48');
  platforms.create(44975, 2039, 'platform49');
  platforms.create(45045, 1854, 'platform50');
  platforms.create(45115, 1634, 'platform51');
  platforms.create(45185, 1424, 'platform52');

  platforms.create(4620, 1150, 'bigblock');
  platforms.create(4865, 875, 'bigblock');
  platforms.create(4620, 600, 'bigblock');
  platforms.create(4940, 390, 'bigblock');
  platforms.create(7930, 1230, 'fungo');
  platforms.create(8400, 1050, 'bigblock');
  platforms.create(9420, 1110, 'bigblock');
  platforms.create(9770, 1000, 'bigblock');
  platforms.create(10090, 900, 'smallblock');
  platforms.create(10340, 930, 'smallblock');
  platforms.create(10540, 960, 'smallblock');
  platforms.create(10750, 970, 'smallblock');
  platforms.create(11760, 990, 'bigblock');
  platforms.create(13750, 1190, 'fungo');
  platforms.create(13350, 900, 'bigblock');
  platforms.create(13630, 640, 'bigblock');
  platforms.create(13330, 360, 'bigblock');
  platforms.create(15570, 1160, 'fungo');
  platforms.create(15880, 1160, 'bigblock'); //83
  platforms.create(45550, 1160, 'bigblock');
  platforms.create(16980, 1160, 'fungo');
  platforms.create(17230, 1160, 'bigblock');
  platforms.create(18300, 1160, 'bigblock'); //87
  platforms.create(18590, 1150, 'fungo');
  platforms.create(18940, 1045, 'bigblock');
  platforms.create(18640, 770, 'bigblock');
  platforms.create(19020, 520, 'smallblock');
  platforms.create(19480, 1050, 'bigblock');
  platforms.create(24440, 1200, 'bigblock');
  platforms.create(24150, 950, 'bigblock');
  platforms.create(24440, 700, 'bigblock');
  platforms.create(24100, 500, 'bigblock');
  platforms.create(24928, 1130, 'bigblock');
  platforms.create(25570, 1160, 'bigblock');
  platforms.create(25730, 940, 'bigblock');
  platforms.create(26060, 730, 'bigblock');
  platforms.create(26300, 600, 'bigblock'); //101
  platforms.create(26915, 380, 'bigblock');
  platforms.create(28070, 610, 'bigblock');
  platforms.create(28280, 930, 'smallblock');
  platforms.create(32780, 1100, 'bigblock');
  platforms.create(33100, 850, 'bigblock');
  platforms.create(32720, 580, 'bigblock');
  platforms.create(32520, 580, 'bigblock');
  platforms.create(32320, 580, 'bigblock');
  platforms.create(33100, 360, 'bigblock'); //110
  platforms.create(35100, 360, 'bigblock'); //111
  platforms.create(35300, 450, 'bigblock'); //112
  platforms.create(37850, 1170, 'bigblock');
  platforms.create(36500, 1150, 'bigblock');
  platforms.create(36100, 950, 'bigblock');
  platforms.create(36490, 730, 'bigblock');
  platforms.create(36040, 510, 'bigblock');
  platforms.create(36850, 880, 'bigblock');

  platforms.create(39230, 1700, 'smallblock');
  platforms.create(39980, 1980, 'smallblock');
  platforms.create(40240, 1890, 'smallblock');

  platforms.create(40300, 1650, 'bigblock'); //122 MARTA
  platforms.create(41410, 1830, 'bigblock');
  platforms.create(42900, 1670, 'bigblock'); //124 MARTA
  platforms.create(45270, 1100, 'bigblock');
  platforms.create(45500, 880, 'bigblock');


  platforms.create(47390, 1060, 'fungo');
  platforms.create(47035, 800, 'fungo');
  platforms.create(46835, 800, 'fungo');
  platforms.create(47435, 500, 'fungo');
  platforms.create(47635, 500, 'fungo');

  platforms.create(2771, 1750, 'platform2b');
  platforms.create(12685, 1819, 'platform12b');
  platforms.create(13735, 1819, 'platform12c');
  platforms.create(19880, 1680, 'platform22b');
  platforms.create(20090, 2224, 'platform25b');
  platforms.create(22585, 1416, 'platform28b');
  platforms.create(25875, 1994, 'platform38b');
  platforms.create(32543, 1416, 'platform39b');
  platforms.create(20830, 1140, 'bigblock');

  platforms.setAll('body.immovable', true);

  fallingplatform1 = game.add.sprite(5284, 486, 'cadente');
  fallingplatform2 = game.add.sprite(19177, 298, 'cadente');
  fallingplatform3 = game.add.sprite(36527, 338, 'cadente');
  fallingplatform4 = game.add.sprite(36834, 347, 'cadente');
  fallingplatform5 = game.add.sprite(37126, 535, 'cadente');

  game.physics.arcade.enable(fallingplatform1);
  game.physics.arcade.enable(fallingplatform2);
  game.physics.arcade.enable(fallingplatform3);
  game.physics.arcade.enable(fallingplatform4);
  game.physics.arcade.enable(fallingplatform5);

  fallingplatform1.body.gravity.y = 0;
  fallingplatform2.body.gravity.y = 0;
  fallingplatform3.body.gravity.y = 0;
  fallingplatform4.body.gravity.y = 0;
  fallingplatform5.body.gravity.y = 0;

  //aggiungo caramelle e posizione
  caramella11 = game.add.sprite(1522, 1375, 'caramella1');
  caramella12 = game.add.sprite(8490, 1015, 'caramella1');
  caramella13 = game.add.sprite(14000, 2065, 'caramella1');
  caramella14 = game.add.sprite(19950, 1640, 'caramella1');
  caramella15 = game.add.sprite(22080, 1385, 'caramella1');
  caramella16 = game.add.sprite(28155, 560, 'caramella1');
  caramella17 = game.add.sprite(36575, 300, 'caramella1');
  caramella18 = game.add.sprite(41500, 1800, 'caramella1');

  game.physics.arcade.enable(caramella11);
  caramella11.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella12);
  caramella12.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella13);
  caramella13.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella14);
  caramella14.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella15);
  caramella15.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella16);
  caramella16.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella17);
  caramella17.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella18);
  caramella18.body.collideWorldBounds = true;

  caramella21 = game.add.sprite(3300, 1715, 'caramella2');
  caramella22 = game.add.sprite(10775, 930, 'caramella2');
  caramella23 = game.add.sprite(19575, 1020, 'caramella2');
  caramella24 = game.add.sprite(20579, 2075, 'caramella2');
  caramella25 = game.add.sprite(25640, 1955, 'caramella2');
  caramella26 = game.add.sprite(32500, 525, 'caramella2');
  caramella27 = game.add.sprite(39255, 1655, 'caramella2');

  game.physics.arcade.enable(caramella21);
  caramella21.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella22);
  caramella22.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella23);
  caramella23.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella24);
  caramella24.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella25);
  caramella25.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella26);
  caramella26.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella27);
  caramella27.body.collideWorldBounds = true;

  caramella31 = game.add.sprite(5030, 355, 'caramella3');
  caramella32 = game.add.sprite(13425, 320, 'caramella3');
  caramella33 = game.add.sprite(11080, 2070, 'caramella3');
  caramella34 = game.add.sprite(19230, 260, 'caramella3');
  caramella35 = game.add.sprite(24180, 475, 'caramella3');
  caramella36 = game.add.sprite(27020, 345, 'caramella3');

  pacco = game.add.sprite(47430, 430, 'pacco');

  game.physics.arcade.enable(caramella31);
  caramella31.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella32);
  caramella32.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella33);
  caramella33.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella34);
  caramella34.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella35);
  caramella35.body.collideWorldBounds = true;
  game.physics.arcade.enable(caramella36);
  caramella36.body.collideWorldBounds = true;

  game.physics.arcade.enable(pacco);
  pacco.body.collideWorldBounds = true;

  muffin1 = game.add.sprite(6370, 1365, 'muffin');
  muffin2 = game.add.sprite(16555, 1365, 'muffin');
  muffin3 = game.add.sprite(18350, 1365, 'muffin');
  muffin4 = game.add.sprite(19430, 1255, 'muffin');
  muffin5 = game.add.sprite(21400, 1005, 'muffin');
  muffin6 = game.add.sprite(26840, 1371, 'muffin');
  muffin7 = game.add.sprite(36930, 835, 'muffin');
  muffin8 = game.add.sprite(38665, 2085, 'muffin');
  muffin9 = game.add.sprite(40600, 2085, 'muffin');
  muffin10 = game.add.sprite(41200, 2085, 'muffin');
  muffin11 = game.add.sprite(28345, 2045, 'muffin');
  muffin12 = game.add.sprite(31900, 1371, 'muffin');
  muffin13 = game.add.sprite(31300, 1371, 'muffin');
  muffin14 = game.add.sprite(30700, 1371, 'muffin');
  muffin15 = game.add.sprite(30100, 1371, 'muffin');
  muffin16 = game.add.sprite(29500, 1371, 'muffin');

  game.physics.arcade.enable(muffin1);
  muffin1.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin2);
  muffin2.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin3);
  muffin3.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin4);
  muffin4.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin5);
  muffin5.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin6);
  muffin6.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin7);
  muffin7.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin8);
  muffin8.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin9);
  muffin9.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin10);
  muffin10.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin11);
  muffin11.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin12);
  muffin12.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin13);
  muffin13.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin14);
  muffin14.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin15);
  muffin15.body.collideWorldBounds = true;
  game.physics.arcade.enable(muffin16);
  muffin16.body.collideWorldBounds = true;

  player = game.add.sprite(32, 1200, 'hansel');//era 'hansel'

  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [4, 5, 6, 7], 10, true);
  game.physics.arcade.enable(player);
  skip = game.add.button(920, 85, 'skip', skippare, this, 0, 0, 0);
  textMsg = game.add.text(92,32,"");
  textMsg.visible = false;
  textMsg.colors = ['#ffffff'];
  skip.fixedToCamera = true;
  textMsg.fixedToCamera = true;
  paused = game.add.button(32, 32, 'pausa', pausa, this, 0, 0, 0);
  paused.fixedToCamera = true;
  paused.visible = false;
  c = false;
  game.camera.follow(player);

  vita = false;
  premuto = false;
  controlloSalto = false;
  k = false;
  player.body.collideWorldBounds = true;
  player.body.gravity.y = 820;

  perso = game.add.image( 0, 0, 'perso');
  perso.visible = false;
  perso.fixedToCamera = true;

  vinto = game.add.image( 0, 0, 'vinto');
  vinto.visible = false;
  vinto.fixedToCamera = true;

  vintoRegalo = game.add.image( 0, 0, 'vintoRegalo');
  vintoRegalo.visible = false;
  vintoRegalo.fixedToCamera = true;

  inventario = game.add.image( 0, 0, 'inventario');
  inventario.visible = false;
  inventario.fixedToCamera = true;

  next = game.add.button(876, 667, 'next', apriInventario, this, 0, 0, 0);
  next.fixedToCamera = true;
  next.visible = false;

  textCaramelle1 = game.add.text(780, 325, "0");
  textCaramelle1.visible = false;
  textCaramelle1.fixedToCamera = true;
  textCaramelle1.colors = ['#ffffff'];

  textCaramelle2 = game.add.text(780, 455, "0");
  textCaramelle2.visible = false;
  textCaramelle2.fixedToCamera = true;
  textCaramelle2.colors = ['#ffffff'];

  textCaramelle3 = game.add.text(780, 580, "0");
  textCaramelle3.visible = false;
  textCaramelle3.fixedToCamera = true;
  textCaramelle3.colors = ['#ffffff'];

  cursors = game.input.keyboard.createCursorKeys();
  jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  switchButton = game.input.keyboard.addKey(Phaser.Keyboard.S);

}

function contatto11() {
  caramella11.kill();
  nCaramelle1 = nCaramelle1 + 1;
  aggiunta2 = game.add.sprite (1522, 1175, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto12() {
  caramella12.kill();
  nCaramelle1 = nCaramelle1 + 1;
  aggiunta2 = game.add.sprite (8490, 815, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto13() {
  caramella13.kill();
  nCaramelle1 = nCaramelle1 + 1;
  aggiunta2 = game.add.sprite (14000, 1865, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto14() {
  caramella14.kill();
  nCaramelle1 = nCaramelle1 + 1;
  aggiunta2 = game.add.sprite (19950, 1440, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto15() {
  caramella15.kill();
  nCaramelle1 = nCaramelle1 + 1;
  aggiunta2 = game.add.sprite (22080, 1185, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto16() {
  caramella16.kill();
  nCaramelle1 = nCaramelle1 + 1;
  aggiunta2 = game.add.sprite (28155, 360, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto17() {
  caramella17.kill();
  nCaramelle1 = nCaramelle1 + 1;
  aggiunta2 = game.add.sprite (36575, 100, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto18() {
  caramella18.kill();
  nCaramelle1 = nCaramelle1 + 1;
  aggiunta2 = game.add.sprite (41500, 1600, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto21() {
  caramella21.kill();
  nCaramelle2 = nCaramelle2 + 1;
  aggiunta2 = game.add.sprite (3300, 1515, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto22() {
  caramella22.kill();
  nCaramelle2 = nCaramelle2 + 1;
  aggiunta2 = game.add.sprite (10800, 730, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto23() {
  caramella23.kill();
  nCaramelle2 = nCaramelle2 + 1;
  aggiunta2 = game.add.sprite (19575, 820, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto24() {
  caramella24.kill();
  nCaramelle2 = nCaramelle2 + 1;
  aggiunta2 = game.add.sprite (20579, 1875, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto25() {
  caramella25.kill();
  nCaramelle2 = nCaramelle2 + 1;
  aggiunta2 = game.add.sprite (25640, 1755, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto26() {
  caramella26.kill();
  nCaramelle2 = nCaramelle2 + 1;
  aggiunta2 = game.add.sprite (32500, 325, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto27() {
  caramella27.kill();
  nCaramelle2 = nCaramelle2 + 1;
  aggiunta2 = game.add.sprite (39275, 1455, 'aggiunta2');
  game.time.events.add (1000, function() {
    aggiunta2.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 2;
  }
}

function contatto31() {
  caramella31.kill();
  nCaramelle3 = nCaramelle3 + 1;
  aggiunta5 = game.add.sprite (5030, 155, 'aggiunta5');
  game.time.events.add (1000, function() {
    aggiunta5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 5;
  }
}

function contatto32() {
  caramella32.kill();
  nCaramelle3 = nCaramelle3 + 1;
  aggiunta5 = game.add.sprite (13425, 120, 'aggiunta5');
  game.time.events.add (1000, function() {
    aggiunta5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 5;
  }
}

function contatto33() {
  caramella33.kill();
  nCaramelle3 = nCaramelle3 + 1;
  aggiunta5 = game.add.sprite (11080, 1870, 'aggiunta5');
  game.time.events.add (1000, function() {
    aggiunta5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 5;
  }
}

function contatto34() {
  caramella34.kill();
  nCaramelle3 = nCaramelle3 + 1;
  aggiunta5 = game.add.sprite (19230, 60, 'aggiunta5');
  game.time.events.add (1000, function() {
    aggiunta5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 5;
  }
}

function contatto35() {
  caramella35.kill();
  nCaramelle3 = nCaramelle3 + 1;
  aggiunta5 = game.add.sprite (24180, 75, 'aggiunta5');
  game.time.events.add (1000, function() {
    aggiunta5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 5;
  }
}

function contatto36() {
  caramella36.kill();
  nCaramelle3 = nCaramelle3 + 1;
  aggiunta5 = game.add.sprite (27020, 145, 'aggiunta5');
  game.time.events.add (1000, function() {
    aggiunta5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo + 5;
  }
}

function regalo() {
  pacco.kill();
  gift = true;
}

function scontro1() {
  muffin1.kill();
  sottratto5 = game.add.sprite (6370, 1165, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro2() {
  muffin2.kill();
  sottratto5 = game.add.sprite (16555, 1165, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro3() {
  muffin3.kill();
  sottratto5 = game.add.sprite (18350, 1165, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro4() {
  muffin4.kill();
  sottratto5 = game.add.sprite (19430, 1055, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro5() {
  muffin5.kill();
  sottratto5 = game.add.sprite (21400, 805, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro6() {
  muffin6.kill();
  sottratto5 = game.add.sprite (26840, 1171, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro7() {
  muffin7.kill();
  sottratto5 = game.add.sprite (36930, 635, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro8() {
  muffin8.kill();
  sottratto5 = game.add.sprite (38665, 1885, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro9() {
  muffin9.kill();
  sottratto5 = game.add.sprite (40600, 1885, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro10() {
  muffin10.kill();
  sottratto5 = game.add.sprite (41200, 1885, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro11() {
  muffin11.kill();
  sottratto5 = game.add.sprite (28345, 1845, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro12() {
  muffin12.kill();
  sottratto5 = game.add.sprite (31900, 1171, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro13() {
  muffin13.kill();
  sottratto5 = game.add.sprite (31300, 1171, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro14() {
  muffin14.kill();
  sottratto5 = game.add.sprite (30700, 1171, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro15() {
  muffin15.kill();
  sottratto5 = game.add.sprite (30100, 1171, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function scontro16() {
  muffin16.kill();
  sottratto5 = game.add.sprite (29500, 1171, 'sottratto5');
  game.time.events.add (1000, function() {
    sottratto5.visible = false;
  })
  if (player.x > 7020){
    tarrivo = tarrivo - 5;
  }
}

function skippare() {
  skip.destroy();
  player.x = 7020;
  player.y = 1200;
}

function contactdown1() {
  game.time.events.add (10, function() {
    fallingplatform1.kill();
  })
}

function contactdown2() {
  game.time.events.add (10, function() {
    fallingplatform2.kill();
  })
}

function contactdown3() {
  game.time.events.add (20, function() {
    fallingplatform3.kill();
  })
}

function contactdown4() {
  game.time.events.add (20, function() {
    fallingplatform4.kill();
  })
}

function contactdown5() {
  game.time.events.add (20, function() {
    fallingplatform5.kill();
  })
}

function noAlzarsi() {
  up = true;
}

function alzarsi() {
  up = false;
}

function abbassati() {
  player.loadTexture('gretel_abbassata');
  player.body.setSize(83, 75, true);
  player.y = player.y + 70;
  k = true;
  i = 2;
}

function apriInventario() {
  textCaramelle1.setText(nCaramelle1);
  textCaramelle2.setText(nCaramelle2);
  textCaramelle3.setText(nCaramelle3);
  perso.visible = false;
  vintoRegalo.visible = false;
  vinto.visible = false;
  next.destroy();
  inventario.visible = true;
  textCaramelle1.visible = true;
  textCaramelle2.visible = true;
  textCaramelle3.visible = true;
}

function update() {

  game.physics.arcade.collide(platforms, caramella11);
  game.physics.arcade.collide(platforms, caramella12);
  game.physics.arcade.collide(platforms, caramella13);
  game.physics.arcade.collide(platforms, caramella14);
  game.physics.arcade.collide(platforms, caramella15);
  game.physics.arcade.collide(platforms, caramella16);
  game.physics.arcade.collide(platforms, caramella17);
  game.physics.arcade.collide(platforms, caramella18);

  game.physics.arcade.collide(platforms, caramella21);
  game.physics.arcade.collide(platforms, caramella22);
  game.physics.arcade.collide(platforms, caramella23);
  game.physics.arcade.collide(platforms, caramella24);
  game.physics.arcade.collide(platforms, caramella25);
  game.physics.arcade.collide(platforms, caramella26);
  game.physics.arcade.collide(platforms, caramella27);

  game.physics.arcade.collide(platforms, caramella31);
  game.physics.arcade.collide(platforms, caramella32);
  game.physics.arcade.collide(platforms, caramella33);
  game.physics.arcade.collide(platforms, caramella34);
  game.physics.arcade.collide(platforms, caramella35);
  game.physics.arcade.collide(platforms, caramella36);

  game.physics.arcade.collide(platforms, pacco);


  game.physics.arcade.collide(player, caramella11, contatto11);
  game.physics.arcade.collide(player, caramella12, contatto12);
  game.physics.arcade.collide(player, caramella13, contatto13);
  game.physics.arcade.collide(player, caramella14, contatto14);
  game.physics.arcade.collide(player, caramella15, contatto15);
  game.physics.arcade.collide(player, caramella16, contatto16);
  game.physics.arcade.collide(player, caramella17, contatto17);
  game.physics.arcade.collide(player, caramella18, contatto18);

  game.physics.arcade.collide(player, caramella21, contatto21);
  game.physics.arcade.collide(player, caramella22, contatto22);
  game.physics.arcade.collide(player, caramella23, contatto23);
  game.physics.arcade.collide(player, caramella24, contatto24);
  game.physics.arcade.collide(player, caramella25, contatto25);
  game.physics.arcade.collide(player, caramella26, contatto26);
  game.physics.arcade.collide(player, caramella27, contatto27);

  game.physics.arcade.collide(player, caramella31, contatto31);
  game.physics.arcade.collide(player, caramella32, contatto32);
  game.physics.arcade.collide(player, caramella33, contatto33);
  game.physics.arcade.collide(player, caramella34, contatto34);
  game.physics.arcade.collide(player, caramella35, contatto35);
  game.physics.arcade.collide(player, caramella36, contatto36);

  game.physics.arcade.collide(player, pacco, regalo);

  game.physics.arcade.collide(player, muffin1, scontro1);
  game.physics.arcade.collide(player, muffin2, scontro2);
  game.physics.arcade.collide(player, muffin3, scontro3);
  game.physics.arcade.collide(player, muffin4, scontro4);
  game.physics.arcade.collide(player, muffin5, scontro5);
  game.physics.arcade.collide(player, muffin6, scontro6);
  game.physics.arcade.collide(player, muffin7, scontro7);
  game.physics.arcade.collide(player, muffin8, scontro8);
  game.physics.arcade.collide(player, muffin9, scontro9);
  game.physics.arcade.collide(player, muffin10, scontro10);
  game.physics.arcade.collide(player, muffin11, scontro11);
  game.physics.arcade.collide(player, muffin12, scontro12);
  game.physics.arcade.collide(player, muffin13, scontro13);
  game.physics.arcade.collide(player, muffin14, scontro14);
  game.physics.arcade.collide(player, muffin15, scontro15);
  game.physics.arcade.collide(player, muffin16, scontro16);

  game.physics.arcade.collide(player, platforms, alzarsi);
  game.physics.arcade.collide(player, noAlzarsi1, noAlzarsi);
  game.physics.arcade.collide(player, noAlzarsi2, noAlzarsi);
  game.physics.arcade.collide(player, noAlzarsi3, noAlzarsi);
  game.physics.arcade.collide(player, noAlzarsi4, noAlzarsi);
  game.physics.arcade.collide(player, noAlzarsi5, noAlzarsi);
  game.physics.arcade.collide(player, noAlzarsi6, noAlzarsi);
  game.physics.arcade.collide(player, noAlzarsi7, noAlzarsi);
  game.physics.arcade.collide(player, noAlzarsi8, noAlzarsi);
  game.physics.arcade.collide(player, platforms.children[58], abbassati);
  game.physics.arcade.collide(player, platforms.children[59], abbassati);
  game.physics.arcade.collide(player, fallingplatform1, contactdown1);
  game.physics.arcade.collide(player, fallingplatform2, contactdown2);
  game.physics.arcade.collide(player, fallingplatform3, contactdown3);
  game.physics.arcade.collide(player, fallingplatform4, contactdown4);
  game.physics.arcade.collide(player, fallingplatform5, contactdown5);

  platforms.children[83].body.velocity.x=Math.sin(game.time.totalElapsedSeconds() - tGO)*(350);
  platforms.children[86].body.velocity.x=Math.sin(game.time.totalElapsedSeconds()- tGO)*(200);
  platforms.children[87].body.velocity.x=Math.sin(game.time.totalElapsedSeconds() - tGO)*(-180);
  platforms.children[101].body.velocity.x=Math.sin(game.time.totalElapsedSeconds() - tGO)*(200);
  platforms.children[110].body.velocity.x=Math.sin(game.time.totalElapsedSeconds() - tGO)*(450);
  platforms.children[111].body.velocity.x=Math.sin(game.time.totalElapsedSeconds() - tGO)*(-400);
  platforms.children[112].body.velocity.x=Math.sin(game.time.totalElapsedSeconds() - tGO)*(200);
  platforms.children[122].body.velocity.x=Math.sin(game.time.totalElapsedSeconds() - tGO)*(350);
  platforms.children[124].body.velocity.x=Math.sin(game.time.totalElapsedSeconds() - tGO)*(-600);
  platforms.children[126].body.velocity.x=Math.sin(game.time.totalElapsedSeconds() - tGO)*(550);

  player.body.velocity.x = 0;

  //skip
  if (player.x > 7020){
    skip.destroy();
    paused.visible = true;
  }

  //switch
  if (switchButton.isDown && i === 0 && premuto === false)
  {
    player.loadTexture('gretel');
    premuto = true;
    i = 1;
  } else if (switchButton.isDown && i === 1 && premuto === false)
  {
    player.loadTexture('hansel');
    premuto = true;
    i = 0;
  }
  if (switchButton.isDown === false) {
    premuto = false;
  }

  //striscia gretel
  if (premuto === false && i === 1 && cursors.down.isDown && k === false)
  {
    player.loadTexture('gretel_abbassata');
    player.body.setSize(83, 75, true);
    player.y = player.y + 70;
    k = true;
    i = 2;
  } else if (premuto === false && i === 2 && cursors.up.isDown && k === false && up === false)
  {
    player.loadTexture('gretel');
    player.y = player.y - 80;
    player.body.setSize(83, 150, true);
    k = true;
    i = 1;
  }
  if (cursors.down.isDown === false) {
    k = false;
  }

  //spostarsi e doppio salto
  if (cursors.left.isDown) {
    player.body.velocity.x = -500;
      player.animations.play('left');
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 500;
      player.animations.play('right');
  } else {
    player.animations.stop();
    player.frame = 4;
  }

  if (i === 1) {
    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
      player.body.velocity.y = -520;
    }
  } else if (i === 0) {
    if (jumpButton.isDown && controlloSalto === false) {
      if (j < 1) {
        player.body.velocity.y = -520;
        j += 1;
      }
    }
    if (player.body.onFloor() || player.body.touching.down) {
      j = 0;
    }
    if (jumpButton.isDown) {
      controlloSalto = true;
    } else {
      controlloSalto = false;
    }
  }

  //timer
  if (player.x > 7020 && c === false) {
    c = true;
    checkPoint.t = game.time.totalElapsedSeconds();
    tpartenza = game.time.totalElapsedSeconds();
    tGO = game.time.totalElapsedSeconds();
    checkPoint.tf = checkPoint.t + 260;
    tarrivo = tpartenza + 260;
    textMsg.visible = true;
  }
  tempo = tarrivo - game.time.totalElapsedSeconds();
  textMsg.setText(Math.round(tempo));
  if ((player.x > 0) && (Math.round(tempo) < 0) && (c === true)) {
    player.visible = false;
    textMsg.visible = false;
    paused.visible = false;
    if(vita === false && player.x < 51285){
      game.time.events.add(1000, gameOver);
    } else if (vita === true && player.x < 51285){
      perso.visible = true;
      next.visible = true;
    }
  }

  //checkpoint
  if (player.x > 32300 && checkPoint.x < 32300) {
    checkPoint.x = 32300;
    checkPoint.t = game.time.totalElapsedSeconds();
    checkPoint.tf = tarrivo;
    checkCaramelle.C1 = nCaramelle1;
    checkCaramelle.C2 = nCaramelle2;
    checkCaramelle.C3 = nCaramelle3;
  }

  //finali
  if(player.x > 51285){
    vita = true;
    if (gift === true){
      vintoRegalo.visible = true;
      next.visible = true;
    } else {
      vinto.visible = true;
      next.visible = true;
    }
  }
}

function render () {

}
