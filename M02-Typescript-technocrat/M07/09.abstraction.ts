// Abstraction

// idea
// implementation

// 1.Interface
// 2.Abstract Class

interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class MediaPlayer implements MediaPlayer {
  play(): void {
    console.log(`media player play`);
  }
  pause(): void {
    console.log("media player pause");
  }
  stop(): void {
    console.log(`media player stop`);
  }
}

abstract class MusicPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class SamriddhaPlayer extends MediaPlayer {
  play(): void {
    console.log(`media player play`);
  }
  pause(): void {
    console.log("media player pause");
  }
  stop(): void {
    console.log(`media player stop`);
  }
}

const samriddha = new SamriddhaPlayer();
samriddha.play()