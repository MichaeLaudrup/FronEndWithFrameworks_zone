import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AppConfig {
    inputStyle?: string;
    dark?: boolean;
    theme?: string;
    ripple?: boolean;
    responsive?: boolean; 
}


@Injectable()
export class AppConfigService {

    config: AppConfig = {
        theme: 'lara-light-blue',
        dark: true,
        inputStyle: 'outlined',
        ripple: true,
        responsive: false
    };

    private configUpdate = new Subject<AppConfig>();

    configUpdate$ = this.configUpdate.asObservable();

    updateConfig(config: AppConfig) {
        this.config = config;
        this.configUpdate.next(config);
    }

    getConfig() {
        return this.config;
    }
}

