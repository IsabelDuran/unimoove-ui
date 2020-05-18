import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { FAB } from 'react-native-paper';
var screenWidth = Dimensions.get('window').width;

export default class StepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
    this.scrollView = React.createRef();
    this.goBack = this.goBack.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  goBack() {
    this.setState({currentPage: this.state.currentPage - 1}, () => {
      this.scrollView.current.scrollTo({
        x: this.state.currentPage * screenWidth,
        y: 0,
        animated: true,
      });
    });
  }

  goNext() {
    this.setState({currentPage: this.state.currentPage + 1}, () => {
      this.scrollView.current.scrollTo({
        x: this.state.currentPage * screenWidth,
        y: 0,
        animated: true,
      });
    });
  }

  render() {
    return (
      <>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          scrollEnabled={false}
          ref={this.scrollView}>
          {this.props.children}
        </ScrollView>
        <FAB
          style={styles.fab}
          icon="arrow-right"
          disabled={!this.state.departurePlace}
          onPress={() => {
            this.scrollView.current.goNext();
          }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  fabLeft: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
  },
});
