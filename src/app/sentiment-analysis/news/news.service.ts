import { NewsModule } from './news.module';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NewsService {

    // Observable string sources
    private missionAnnouncedSource = new Subject<string>();
   
    // Observable string streams
    missionAnnounced$ = this.missionAnnouncedSource.asObservable();
   
    // Service message commands
    announceMission(mission: any) {
      this.missionAnnouncedSource.next(mission);
    }
}
