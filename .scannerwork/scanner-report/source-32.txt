import React, {Component} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FAB} from 'react-native-paper';
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
      this.props.onPageChange(this.state.currentPage);
    });
  }

  goNext() {
    this.setState({currentPage: this.state.currentPage + 1}, () => {
      this.scrollView.current.scrollTo({
        x: this.state.currentPage * screenWidth,
        y: 0,
        animated: true,
      });
      this.props.onPageChange(this.state.currentPage);
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
        {this.state.currentPage >= this.props.children.length - 1 ? (
          <FAB
            style={styles.fab}
            icon="send"
            disabled={this.props.disabledNext}
            onPress={() => {
              this.goNext();
            }}
          />
        ) : (
          <FAB
            style={styles.fab}
            icon="arrow-right"
            disabled={this.props.disabledNext}
            onPress={() => {
              this.goNext();
            }}
          />
        )}

        {this.state.currentPage !== 0 ? (
          <FAB
            style={styles.fabLeft}
            icon="arrow-left"
            disabled={this.props.disabledBack}
            onPress={() => {
              this.goBack();
            }}
          />
        ) : (
          undefined
        )}
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
