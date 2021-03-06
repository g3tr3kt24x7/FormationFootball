import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/formation.model';
import { Players } from '../model/players.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {
  formationList: Formation[] = [];
  formationModel: Formation = {
    formationClassCollection: [],
    formationName: '',
    id:0
  };

  playerList: Players[] = [];

  constructor() { }

  ngOnInit() {
    
    this.getFormation();
    this.getSinglerFormation(1);
    this.getPlayers();
  }

  getSinglerFormation(id: number) {
    this.formationModel = this.formationList.find(x => x.id == id);
    console.log(this.formationModel);
  }

  getFormation() {
    this.formationList.push({
      id: 1,
      formationName: '4-4-2',
      formationClassCollection: [
        'gk',
        'defense defense-player-1',
        'defense defense-player-2',
        'defense defense-player-3',
        'defense defense-player-4',
        'mid-field mid-field-1',
        'mid-field mid-field-2',
        'mid-field mid-field-3',
        'mid-field mid-field-4',
        'striker striker-1',
        'striker striker-2',        
      ]
    });
    this.formationList.push({
      id: 2,
      formationName: '4-3-3',
      formationClassCollection: [
        'gk',
        'defense defense-player-1',
        'defense defense-player-2',
        'defense defense-player-3',
        'defense defense-player-4',
        'mid-field mid-field-433-1',
        'mid-field mid-field-433-2',
        'mid-field mid-field-433-3',        
        'striker striker-433-1',
        'striker striker-433-2',
        'striker striker-433-3'
      ]
     
    });
    this.formationList.push({
      id: 3,
      formationName: '4-3-2-1',
      formationClassCollection: [
        'gk',
        'defense defense-player-1',
        'defense defense-player-2',
        'defense defense-player-3',
        'defense defense-player-4',
        'mid-field mid-field-4321-1',
        'mid-field mid-field-4321-2',
        'mid-field mid-field-4321-3',        
        'striker-432 striker-4321-1',
        'striker-432 striker-4321-2',
        'forward forward-4321-1',
      ]
    });
    this.formationList.push({
      id: 4,
      formationName: '4-2-3-1',
      formationClassCollection: [
        'gk',
        'defense defense-player-1',
        'defense defense-player-2',
        'defense defense-player-3',
        'defense defense-player-4',
        'mid-field mid-field-4231-1',
        'mid-field mid-field-4231-2',        
        'striker-423 striker-4231-1',
        'striker-423 striker-4231-2',
        'striker-423 striker-4231-3',
        'forward forward-4321-1',
      ]
    });
  }

  getPlayers() {
    for (let i = 0; i <= 11; i++) {
      this.playerList.push({
        id: i + 1,
        playerName: 'Player' + i.toString(),
        playerNumber: i + 1,
        playerImgUrl:''
      });
    }
    this.playerList[0].playerImgUrl = 'leno_profile.png';
    this.playerList[1].playerImgUrl = 'monreal_profile.png';
    this.playerList[2].playerImgUrl = 'koscielny_profile.png';
    this.playerList[3].playerImgUrl = 'mustafi_profile.png';
    this.playerList[4].playerImgUrl = 'iwobi_profile.png';
    this.playerList[5].playerImgUrl = 'torreira_profile.png';
    this.playerList[6].playerImgUrl = 'guendozi_profile.png';
    this.playerList[7].playerImgUrl = 'lichsteiner_profile.png';
    this.playerList[8].playerImgUrl = 'kolasinac_profile.png';
    this.playerList[9].playerImgUrl = 'aubamayang_profile.png';
    this.playerList[10].playerImgUrl = 'lacazette_profile.png';
  }
}
