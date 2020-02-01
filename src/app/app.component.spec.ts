import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppTopBarComponent } from './shared/layout/topbar/app.topbar.component';
import { AppMenuComponent, AppSubMenuComponent } from './shared/layout/sidebar/app.menu.component';
import { AppFooterComponent } from './shared/layout/footer/app.footer.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ScrollPanelModule],
            declarations: [
                AppComponent,
                AppTopBarComponent,
                AppMenuComponent,
                AppSubMenuComponent,
                AppFooterComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
