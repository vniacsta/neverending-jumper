let config = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  backgroundColor: '#4599ff',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
    }
  },
  scene: [JumpScene]
};

game = new Phaser.Game(config);

