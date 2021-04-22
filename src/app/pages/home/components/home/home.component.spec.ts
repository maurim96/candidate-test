import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { HomeListItem } from '../../models';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test getFormattedTitle functionality', () => {
    // Arrange
    const item: HomeListItem = {
      index: 999,
      title: 'Testing',
      linkTo: 'url',
      link: 'Link test value',
      content: 'Contet test value',
    };

    // Act
    const result = component.getFormattedTitle(item);

    // Assert
    expect(result).toEqual('999: Testing');
  });
});
