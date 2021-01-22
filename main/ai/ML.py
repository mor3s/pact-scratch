from sklearn.model_selection import train_test_split
import mglearn
X, y = mglearn.datasets.make_forge()
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)

from sklearn.neighbors import KNeighborsClassifier


def knnclassifier():
    """
    Kneighbors classifier test
    >>> knnclassifier() > 0.5
    True
    """
    clf = KNeighborsClassifier(n_neighbors=3)
    clf.fit(X_train, y_train)
    return clf.score(X_test, y_test)


if __name__ == "__main__":
    import doctest
    doctest.testmod()