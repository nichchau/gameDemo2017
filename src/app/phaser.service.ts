import {Injectable} from '@angular/core';
import {Jsonp,URLSearchParams,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PhaserService{
    constructor (private jsonp:Jsonp){}
        search():Observable<any>{
           let wordUrl = 'http://www.setgetgo.com/randomword/get.php';
                let params = new URLSearchParams();
                    params.set('callback', "JSONP_CALLBACK");
   
        return this.jsonp.get(wordUrl,{search: params})
        .map(function(res: Response){
            return res.json() || {};
        });
    
        }    
}