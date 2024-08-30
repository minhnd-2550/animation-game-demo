const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update  // Thêm hàm update
    }
};

const game = new Phaser.Game(config);
let cat;

function preload() {
    // Load the texture atlas (PNG + JSON)
    this.load.atlas('myAtlas', './../assets/spritesheet.png', './../assets/spritesheet.json');
}

function create() {
    // Tạo ra một animation từ các frame
    this.anims.create({
        key: 'run',
        frames: this.anims.generateFrameNames('myAtlas', {
            start: 1,
            end: 4,
            zeroPad: 2,
            prefix: 'RunRight',
            suffix: '.png'
        }),
        frameRate: 10,
        repeat: -1
    });

    // Thêm sprite và chạy animation
    cat = this.add.sprite(400, 300, 'myAtlas', 'RunRight01.png');
    cat.play('run');
}

function update() {
    // Di chuyển đối tượng sang phải
    cat.x += 2;  // Tăng giá trị x để di chuyển sang phải

    // Kiểm tra nếu đối tượng đi ra khỏi màn hình thì quay lại từ đầu
    if (cat.x > config.width) {
        cat.x = -cat.width;
    }
}
