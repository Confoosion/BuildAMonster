class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.rightFootX = this.bodyX + 75;
        this.rightFootY = this.bodyY + 80;
        this.leftFootX = this.bodyX - 75;
        this.leftFootY = this.bodyY + 80;
        
        this.rightArmX = this.bodyX + 90;
        this.rightArmY = this.bodyY + 20;
        this.leftArmX = this.bodyX - 90;
        this.leftArmY = this.bodyY + 20;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 20;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 35;

        this.leftAntennaX = this.bodyX + 40;
        this.leftAntennaY = this.bodyY - 100;
        this.rightAntennaX = this.bodyX - 40;
        this.rightAntennaY = this.bodyY - 100;

        this.keyS = null;
        this.keyF = null;
        this.keyA = null;
        this.keyD = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.rightFoot = this.add.sprite(this.rightFootX, this.rightFootY, "monsterParts", "leg_greenC.png");
        my.sprite.leftFoot = this.add.sprite(this.leftFootX, this.leftFootY, "monsterParts", "leg_greenC.png");
        my.sprite.leftFoot.flipX = true;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueD.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueD.png");
        my.sprite.leftArm.flipX = true;

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_yellow.png");

        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");

        my.sprite.leftAntenna = this.add.sprite(this.leftAntennaX, this.leftAntennaY, "monsterParts", "detail_yellow_antenna_large.png");
        my.sprite.rightAntenna = this.add.sprite(this.rightAntennaX, this.rightAntennaY, "monsterParts", "detail_yellow_antenna_large.png");
        my.sprite.rightAntenna.flipX = true;

        my.sprite.fangs.visible = false;

        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(Phaser.Input.Keyboard.JustDown(this.keyS))
        {
            my.sprite.fangs.visible = false;
            my.sprite.mouth.visible = true;
        }
        if(Phaser.Input.Keyboard.JustDown(this.keyF))
        {
            my.sprite.mouth.visible = false;
            my.sprite.fangs.visible = true;
        }

        if(this.keyA.isDown)
        {
            my.sprite.rightFoot.x--;
            my.sprite.leftFoot.x--;
            my.sprite.body.x--;
            my.sprite.rightArm.x--;
            my.sprite.leftArm.x--;
            my.sprite.eye.x--;
            my.sprite.mouth.x--;
            my.sprite.fangs.x--;
            my.sprite.leftAntenna.x--;
            my.sprite.rightAntenna.x--;
        }
        if(this.keyD.isDown)
        {
            my.sprite.rightFoot.x++;
            my.sprite.leftFoot.x++;
            my.sprite.body.x++;
            my.sprite.rightArm.x++;
            my.sprite.leftArm.x++;
            my.sprite.eye.x++;
            my.sprite.mouth.x++;
            my.sprite.fangs.x++;
            my.sprite.leftAntenna.x++;
            my.sprite.rightAntenna.x++;
        }
        /*
        if(this.keyA.isDown)
        {
            for(bodyPart in my.sprite)
            {
                bodyPart.x -= 1;
            }
        }
        if(this.keyD.isDown)
        {
            for(bodyPart in my.sprite)
            {
                bodyPart.x += 10;
            }
        }
        */
    }

}
